/*
Theme Name: Mileno
Description: Simple Coming Soon Template
Author: Erilisdesign
Theme URI: https://preview.erilisdesign.com/html/mileno
Author URI: https://themeforest.net/user/erilisdesign
Version: 1.1.1
License: https://themeforest.net/licenses/standard
*/

/*------------------------------------------------------
[Table of contents]

1. Loader
2. Website Slider
3. Navigation
4. Layout resize
5. Backgrounds
6. Granim - Animaetd Gradient
7. Lightbox
8. Countdown
9. Subscribe Form
10. Contact Form
11. Bootstrap
12. Typed text
------------------------------------------------------*/

(function($){
  "use strict";

  // Vars
  var $html = $('html'),
      $body = $('body'),
      $siteNavbar = $('.site-navbar'),
      $siteNavbarCollapse = $('.site-navbar #navbarCollapse'),
      $siteNavbarToggler = $('.site-navbar .navbar-toggler-alternative'),
      siteNavbar_base = $siteNavbar.attr('data-navbar-base') ? $siteNavbar.attr('data-navbar-base') : '',
      siteNavbar_toggled = $siteNavbar.attr('data-navbar-toggled') ? $siteNavbar.attr('data-navbar-toggled') : '',
      siteNavbar_scrolled = $siteNavbar.attr('data-navbar-scrolled') ? $siteNavbar.attr('data-navbar-scrolled') : '',
      siteNavbar_expand = 992;

  function getWindowWidth(){
    return Math.max($(window).width(), window.innerWidth);
  }

  function getWindowHeight(){
    return Math.max($(window).height(), window.innerHeight, document.documentElement.clientHeight);
  }

  function getBodyWidth(){
    return Math.max( document.body.offsetWidth, document.documentElement.clientWidth, parseInt( window.getComputedStyle( document.body ).width, 10 ) );
  }

  function getScrollbarWidth(){
    if( getWindowWidth() === getBodyWidth() ){
      var scrollbarWidth = 0;
    } else {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
    return scrollbarWidth;
  }

  function setOverflowScroll(){
    var html = document.documentElement;
    var body = document.body;
    var measureDiv = document.createElement('div');
    measureDiv.className = 'body-overflow-measure';
    body.appendChild(measureDiv);
    if ( ( window.getComputedStyle(html).overflowY !== 'visible' && window.getComputedStyle(html).overflowY !== 'hidden' ) && html.scrollHeight > html.clientHeight ){
      html.style.overflowY = 'scroll';
    } else if ( ( window.getComputedStyle(body).overflowY !== 'visible' && window.getComputedStyle(body).overflowY !== 'hidden' ) && body.scrollHeight > body.clientHeight ){
      body.style.overflowY = 'scroll';
    }
    body.removeChild(measureDiv);
  }
  setOverflowScroll();

  function resetScrollbar(){
    $html.css('overflow-y','');
    $body.css('overflow-y','');
  }

  function hideScrollbar(){
    $html.css('overflow-y','hidden');
    $body.css('overflow-y','hidden');
  }

  // [1. Loader]
  window.addEventListener( 'load', function(){
    document.querySelector('body').classList.add('loaded');
  });

  // [2. Website Slider]
  var websiteSlider = {

    settings: {
      slider: $('.website-slider'),
      sliderInner: $('.website-slider-inner'),
      sliderItem: $('.website-slider-item'),
      sliderItemInner: $('.website-slider-item-inner'),
      keyboard: true,
      touch: true,
	  closeMobileNavOnNewSlide: true,
	  locationHistory: true
    },

    // Do not change
    helper: {
      slideAnimaionRun: false
    },

    init: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      this.initialize();
      this.keyboardSupport();
      this.touchSupport();
      this.locationHashChanged();
    },

    resize: function() {
      this.layout();
    },

    load: function() {
      this.layout();
    },

    initialize: function() {
      $(window).scrollTop(0);
      $html.addClass('website-slider-enabled');
      this.settings.sliderItem.first().addClass('ws-first');
      this.settings.sliderItem.last().addClass('ws-last');

      this.layout();
      this.overlay();
      this.arrows();
      this.showFirstSlide();
    },

    layout: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      this.settings.sliderInner.css( 'min-height', getWindowHeight( ));
      this.settings.sliderItemInner.css( 'min-height', getWindowHeight( ));
    },

    overlay: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      if( $('.overlay.overlay-global').length > 0 ){
        $body.addClass('has-global-overlay');
      }

      this.settings.sliderItem.each(function(){
        if( $(this).children('.overlay').length > 0 ){
          $(this).addClass('has-overlay');
        }
      });
    },

    arrows: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      $(document).on( 'click', '.btn-prev-slide, .btn-next-slide', function(e){
        e.preventDefault();

        var target;

        if( $(this).hasClass('btn-prev-slide') ){
          target = $('.website-slider-item.active.show').prev('.website-slider-item').attr('id');
        } else if( $(this).hasClass('btn-next-slide') ) {
          target = $('.website-slider-item.active.show').next('.website-slider-item').attr('id');
        }

        if( target !== '' || target !== undefined ){
          websiteSlider.showSlide( '#' + target );
        }

        $(this).blur();
      });
    },

    showFirstSlide: function() {
      var windowHash = window.location.hash ? window.location.hash : '',
          loadSlide = '#' + this.settings.sliderItem.first().attr('id');

      if( windowHash !== '#' && windowHash !== '#!' && document.getElementById(windowHash.substring(1)) !== null && $(windowHash).hasClass('website-slider-item') ){
        loadSlide = windowHash;
      }

      this.showSlide(loadSlide);
    },

    showSlide: function(target) {
      if( !$(target).length > 0 && !$(target).hasClass('website-slider-item') )
        return;

      if( websiteSlider.helper.slideAnimaionRun )
        return;

      if ( $(target).hasClass('active') )
        return;

      websiteSlider.helper.slideAnimaionRun = true;

      if( websiteSlider.settings.locationHistory === true ){
        window.location.href = target;
      }

      var $lastSlide = $('.website-slider-item.active').attr('id'),
          $lastSlide = $( '#' + $lastSlide ),
          prev_target = $(target).prev('.website-slider-item').attr('id'),
          next_target = $(target).next('.website-slider-item').attr('id'),
          clear_show_1,
          clear_show_2,
          clear_show_3,
          clear_show_4;

      function show(){
        $('.site-navbar li a').removeClass('active');
        $('.site-navbar a[href="'+target+'"]').addClass('active');

        if( prev_target === '' || prev_target === undefined ){
          $('.btn-prev-slide').addClass('disabled');
        } else {
          $('.btn-prev-slide').removeClass('disabled');
        }

        if( next_target === '' || next_target === undefined ){
          $('.btn-next-slide').addClass('disabled');
        } else {
          $('.btn-next-slide').removeClass('disabled');
        }

        $lastSlide.addClass('show-prev').removeClass('active');
        $(target).addClass('show-new');

        clear_show_1 = setTimeout(function(){
          $(target).addClass('active show').removeClass('show-new');
          $lastSlide.removeClass('show');
          mileno_navChangeClasses('slide');
          if( websiteSlider.settings.closeMobileNavOnNewSlide ){
            if ( $siteNavbarToggler.attr('aria-expanded') === 'true' ){
              $siteNavbarToggler.trigger('click');
            }
          }
        }, 30);

        clear_show_2 = setTimeout(function(){
          $lastSlide.removeClass('show-prev');
        }, 460);

        clear_show_3 = setTimeout(function(){
          websiteSlider.helper.slideAnimaionRun = false;
        }, 560);
      }

      if( $(window).scrollTop() === 0 ){
        show();
      } else {
        smoothScroll(0);

        clear_show_4 = setTimeout(function(){
          show();
        }, 800);
      }
    },

    getCurrentSlide: function() {
      var currentSlide = $('.website-slider-item.active');
      if( currentSlide.length === 0 ){
        currentSlide = this.settings.sliderItem.first();
      }

      return currentSlide;
    },

    disableEvent: function() {
      if ($body.hasClass('modal-open')){
        return true;
      }

      if ($body.hasClass('featherlight-open')){
        return true;
      }

      if ($('input,select,textarea').is(':focus')){
        return true;
      }

      return false;
    },

    keyboardSupport: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      if( this.settings.keyboard === false )
        return;

      document.addEventListener( 'keydown', function(e){
        if ( websiteSlider.disableEvent() ){
          return;
        }

        if( ( !e.keyCode == 37 || !e.keyCode == 39 ) && e.repeat )
          return;

        var target;

        if( e.keyCode == 37 && !e.repeat ){ // prev
          target = websiteSlider.getCurrentSlide().prev().attr('id');
        } else if( e.keyCode == 39 && !e.repeat ){ // next
          target = websiteSlider.getCurrentSlide().next().attr('id');
        }

        if( target ){
          websiteSlider.showSlide( '#' + target );
        }
      });
    },

    touchSupport: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      if(this.settings.touch === false)
        return;

      var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
      var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

      if( !( isTouchDevice && isTouch ) ){
        return;
      }

      var DIRECTION_NONE = 1,
          DIRECTION_LEFT = 2,
          DIRECTION_RIGHT = 4,
          DIRECTION_UP = 8,
          DIRECTION_DOWN = 16;

      var touchStartX = 0,
          touchEndX = 0,
          touchStartY = 0,
          touchEndY = 0,
          tracking = false,
          touchEvents = [];

      // Add Touch Listener
      document.addEventListener('touchstart', handleGestureStart, false);
      document.addEventListener('touchmove', handleGestureMove, false);
      document.addEventListener('touchend', handleGestureEnd, false);
      document.addEventListener('touchcancel', handleGestureEnd, false);

      function handleGestureStart(evt) {
        if( websiteSlider.disableEvent() ){
          return;
        }

        var eventType = evt.type;

        // Remove Mouse Listeners
        if( eventType === 'mouse' ){
          return false;
        }

        tracking = true;

        var touchEvents = getGesturePointFromEvent(evt);

        touchStartX = touchEvents.x;
        touchEndX = touchEvents.x;
        touchStartY = touchEvents.y;
        touchEndY = touchEvents.y;
      }

      function handleGestureMove(evt) {
        if( websiteSlider.disableEvent() ){
          return;
        }

        if (tracking) {
          var eventType = evt.type;

          // Remove Mouse Listeners
          if( eventType === 'mouse' ){
            return false;
          }

          var touchEvents = getGesturePointFromEvent(evt),
              touchMoveX = 0;

          touchEndX = touchEvents.x;
          touchEndY = touchEvents.y;

          if (touchStartX > touchEndX) {
            // right
            touchMoveX = -Math.abs( touchStartX - touchEndX );
          } else if (touchStartX < touchEndX) {
            // left
            touchMoveX = Math.abs( touchEndX - touchStartX );
          }

          if( Math.abs( touchStartY - touchEndY ) > getWindowHeight() / 15 || Math.abs( touchEndY - touchStartY ) > getWindowHeight() / 15 ){
            websiteSlider.settings.sliderItemInner.css('transform','');

            return false;
          }

          if( (getWindowWidth() / 100 * 5 ) < Math.abs( touchMoveX ) && (getWindowWidth() / 100 * 10 ) > Math.abs( touchMoveX ) ){
            websiteSlider.getCurrentSlide().find('.website-slider-item-inner').css('transform','translateX('+touchMoveX+'px)');
          }
        }
      }

      function handleGestureEnd(evt) {
        if( websiteSlider.disableEvent() ){
          return;
        }

        if (tracking) {
          tracking = false;
          var eventType = evt.type;

          // Remove Mouse Listeners
          if( eventType === 'mouse' ){
            return false;
          }

          if( evt.type !== 'pointercancel' && evt.type !== 'touchcancel' && ( touchEvents === 'undefined' || touchEvents === undefined ) ){
            var touchEvents = getGesturePointFromEvent(evt);
            touchEndX = touchEvents.x;
            touchEndY = touchEvents.y;
          }

          updateSwipeRestPosition();

          websiteSlider.settings.sliderItemInner.css('transform','');

          touchStartX = 0;
          touchStartY = 0;
        }
      }

      function getGesturePointFromEvent(evt) {
        var point = {};

        if( evt.originalEvent && evt.originalEvent.touches) {
          point.x = evt.originalEvent.touches[0].clientX;
          point.y = evt.originalEvent.touches[0].clientY;
        } else if( evt.originalEvent && evt.originalEvent.changedTouches) {
          point.x = evt.originalEvent.changedTouches[0].clientX;
          point.y = evt.originalEvent.changedTouches[0].clientY;
        } else if( evt.touches && evt.touches.length > 0 ) {
          point.x = evt.touches[0].clientX;
          point.y = evt.touches[0].clientY;
        } else if( evt.changedTouches && evt.changedTouches.length > 0 ) {
          point.x = evt.changedTouches[0].clientX;
          point.y = evt.changedTouches[0].clientY;
        } else if( evt.targetTouches && evt.targetTouches.length > 0 ) {
          point.x = evt.targetTouches[0].clientX;
          point.y = evt.targetTouches[0].clientY;
        } else {
          point.x = evt.clientX || evt.pageX;
          point.y = evt.clientY || evt.pageY;
        }

        return point;
      }

      function updateSwipeRestPosition() {
        // Go to the default state and change
        var newDirection = DIRECTION_NONE;

        if (touchStartX > touchEndX && Math.abs( touchStartX - touchEndX ) > (getWindowWidth() / 100 * 25) ) {
          newDirection = DIRECTION_RIGHT;
        } else if (touchStartX < touchEndX && Math.abs( touchEndX - touchStartX ) > (getWindowWidth() / 100 * 25) ) {
          newDirection = DIRECTION_LEFT;
        }

        if( Math.abs( touchStartY - touchEndY ) > getWindowHeight() / 15 || Math.abs( touchEndY - touchStartY ) > getWindowHeight() / 15 ){
          newDirection = DIRECTION_NONE;
        }

        if( newDirection === DIRECTION_LEFT || newDirection === DIRECTION_RIGHT ){
          changeState(newDirection);
        }
      }

      function changeState(newDirection) {
        var target;

        if( newDirection === DIRECTION_LEFT ){
          // prev
          target = websiteSlider.getCurrentSlide().prev().attr('id');
        } else if( newDirection === DIRECTION_RIGHT ){
          // next
          target = websiteSlider.getCurrentSlide().next().attr('id');
        }

        if( target ){
          websiteSlider.showSlide( '#' + target );
        }
      }

    },

	locationHashChanged: function() {
      if (!this.settings.slider.length > 0) {
        return;
      }

      if( this.settings.locationHistory === false )
        return;

      function locationHashChanged( e ) {
        if ( websiteSlider.disableEvent() ){
          return;
        }

        var target;

        if( e.newURL !== e.oldURL ){
          target = location.hash;
        }

        if( target ){
          websiteSlider.showSlide( target );
        }
      }

      window.onhashchange = locationHashChanged;
    },

  };

  // [3. Navigation]
  function mileno_navigation(){

    // Navigation collapse
    $siteNavbarCollapse.on( 'show.bs.collapse', function(){
      $siteNavbar.addClass('navbar-toggled-show');
      $siteNavbarToggler.blur();
      mileno_navChangeClasses('toggled');
    });

    $siteNavbarCollapse.on( 'hidden.bs.collapse', function(){
      $siteNavbar.removeClass('navbar-toggled-show');
      $siteNavbarToggler.blur();

      if ( $siteNavbar.hasClass('scrolled') ){
        mileno_navChangeClasses('scrolled');
      } else {
        mileno_navChangeClasses();
      }
    });

    // Clickable Links
    $(document).on( 'click', 'a.scrollto, .site-navbar a[href^="#"]', function(e){
      var target;

      // Make sure this.hash has a value before overriding default behavior
      if ( this.hash !== '' && this.hash !== '#!' && $( this.hash ).length > 0 ){
        target = this.hash;
      } else {
        return false;
      }

      if( target !== '' ){
        // Prevent default anchor click behavior
        e.preventDefault();

        if( $( target ).length > 0 && $( target ).hasClass('website-slider-item') ){
          websiteSlider.showSlide(target);

          $(this).blur();
        } else {
          var targetPosition = parseInt( Math.max( document.querySelector(target).offsetTop, $(target).offset().top ), 10 );

          smoothScroll(targetPosition);
          $(this).blur();
        }
      }

      return false;
    });

    // Close nav on click outside of '.sitenav-collapse-inner'
    $(document).on( 'click touchstart', function(e){
      if ( $siteNavbar.is(e.target) || $(e.target).closest('.site-navbar').hasClass('site-navbar') || $(e.target).hasClass('navbar-toggler') || $(e.target).hasClass('navbar-toggler-alternative') ){
        return;
      }

      if ( $siteNavbarToggler.attr('aria-expanded') === 'true' ){
        $siteNavbarToggler.trigger('click');
      }
    });

  }

  function mileno_navOnScroll(){
    if ( $siteNavbar.length > 0 && $siteNavbar.hasClass('site-navbar-fixed') ){
      var currentPos = $(window).scrollTop();

      if ( currentPos > 0 ){
        if ( $siteNavbar.hasClass('scrolled') ){
          return;
        }

        $siteNavbar.addClass('scrolled').removeClass('scrolled-0');

        if( $siteNavbar.hasClass('navbar-toggled-show') ){
          mileno_navChangeClasses('toggled');
        } else {
          mileno_navChangeClasses('scrolled');
        }
      } else {
        $siteNavbar.removeClass('scrolled').addClass('scrolled-0');

        if( $siteNavbar.hasClass('navbar-toggled-show') ){
          mileno_navChangeClasses('toggled');
        } else {
          mileno_navChangeClasses();
        }
      }
    }
  }

  var nav_event_old;
  function mileno_navChangeClasses(nav_event){
    if( nav_event_old === nav_event && !( nav_event == '' || nav_event == undefined || nav_event == 'slide' ) )
      return;

    if( nav_event === 'slide' && $('.website-slider-item.active').attr('data-navbar-slide') ){
      if( $siteNavbar.hasClass('navbar-toggled-show') ){
        mileno_navChangeClasses('toggled');

        return true;
      } else {
        $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_scrolled, siteNavbar_toggled);
        $siteNavbar.addClass( $('.website-slider-item.active').attr('data-navbar-slide') );
      }
    } else if( nav_event === 'toggled' && siteNavbar_toggled ){
      $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_scrolled);
      $siteNavbar.addClass(siteNavbar_toggled);
    } else if( nav_event === 'scrolled' && siteNavbar_scrolled ){
      $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_toggled);
      $siteNavbar.addClass(siteNavbar_scrolled);
    } else {
      if($('.website-slider-item.active').attr('data-navbar-slide')){
        $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_toggled, siteNavbar_scrolled);
        $siteNavbar.addClass( $('.website-slider-item.active').attr('data-navbar-slide') );
      } else if(siteNavbar_base){
        $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_toggled, siteNavbar_scrolled);
        $siteNavbar.addClass(siteNavbar_base);
      }
    }

    if( $siteNavbar.hasClass('navbar-light') ){
      $('[data-on-navbar-light]').each(function(){
        var el = $(this);

        if( el.attr('data-on-navbar-dark') ){
          el.removeClass(el.attr('data-on-navbar-dark'));
        }
        if( el.attr('data-on-navbar-light') ){
          el.addClass(el.attr('data-on-navbar-light'));
        }
      });
    } else if( $siteNavbar.hasClass('navbar-dark') ){
      $('[data-on-navbar-dark]').each(function(){
        var el = $(this);

        if( el.attr('data-on-navbar-light') ){
          el.removeClass(el.attr('data-on-navbar-light'));
        }
        if( el.attr('data-on-navbar-dark') ){
          el.addClass(el.attr('data-on-navbar-dark'));
        }
      });
    }

    nav_event_old = nav_event;
  }

  function smoothScroll(targetPosition){
    $(window).scrollTo(targetPosition,800);
  }

  // [4. Layout Resize]
  function mileno_layoutResize(){
    if( getWindowWidth() >= 992 ){
      if ( $siteNavbarToggler.attr('aria-expanded') === 'true' ){
        $siteNavbar.removeClass('navbar-toggled-show');
        $siteNavbarCollapse.removeClass('show');
        $siteNavbarToggler.attr('aria-expanded','false');
        $siteNavbarToggler.addClass('collapsed');
        mileno_navChangeClasses();
      }
    }
  }

  // [5. Backgrounds]
  function mileno_backgrounds(){

    // Image
    var $bgImage = $('.bg-image-holder');
    if($bgImage.length){
      $bgImage.each(function(){
        var $self = $(this);
        var src = $self.children('img').attr('src');

        $self.css('background-image','url('+src+')').children('img').hide();
      });
    }

    // Video Background
    if ( $body.hasClass('mobile') ){
      $('.video-wrapper').css('display','none');
    }

  }

  // [6. Granim - Animaetd Gradient]
  function mileno_granim(){
    if($('[data-gradient-bg]').length){
      $('[data-gradient-bg]').each( function( index, element ){
        var granimParent = $(this),
          granimID = 'granim-'+index+'',
          colours = granimParent.attr('data-gradient-bg'),
          colours = colours.replace(' ',''),
          colours = colours.replace(/'/g, '"')
          colours = JSON.parse( colours );

        // Add canvas
        granimParent.prepend('<canvas id="'+granimID+'"></canvas>');

        var granimInstance = new Granim({
          element: '#'+granimID,
          name: 'basic-gradient',
          direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
          opacity: [1, 1],
          isPausedWhenNotInView: true,
          states : {
            "default-state": {
              gradients: colours
            }
          }
        });
      });
    }
  }

  // [7. Lightbox]
  function mileno_lightbox(){
    if (!$().featherlight){
      console.log('Featherlight: featherlight not defined.');
      return true;
    }

    $.extend($.featherlight.defaults, {
      closeIcon: '<i class="fas fa-times"></i>'
    });

    $.extend($.featherlightGallery.defaults, {
      previousIcon: '<i class="fas fa-chevron-left"></i>',
      nextIcon: '<i class="fas fa-chevron-right"></i>'
    });

    $.featherlight.prototype.afterOpen = function(){
      $body.addClass('featherlight-open');
    };

    $.featherlight.prototype.afterContent = function(){
      var title = this.$currentTarget.attr('data-title');
      var text = this.$currentTarget.attr('data-text');

      if ( !title && !text )
        return;

      this.$instance.find('.caption').remove();

      var title = title ? '<h4 class="title-gallery">' + title + '</h4>' : '',
        text = text ? '<p class="text-gallery">' + text + '</p>' : '';

      $('<div class="caption">').html( title + text ).appendTo(this.$instance.find('.featherlight-content'));
    };

    $.featherlight.prototype.afterClose = function(){
      $body.removeClass('featherlight-open');
    };
  }

  // [8. Countdown]
  function mileno_countdown(){
    var countdown = $('.countdown[data-countdown]');

    if (countdown.length > 0){
      countdown.each(function(){
        var $countdown = $(this),
          finalDate = $countdown.data('countdown');
        $countdown.countdown(finalDate, function(event){
          $countdown.html(event.strftime(
            '<div class="countdown-container row"> <div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%-D</div><span class="title">Day%!d</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%H</div><span class="title">Hours</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%M</div><span class="title">Minutes</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%S</div><span class="title">Seconds</span></div></div></div>'
          ));
        });
      });
    }
  }

  // [9. Subscribe Form]
  function mileno_subscribeForm(){
    var $subscribeForm = $('.subscribe-form');

    if ( $subscribeForm.length > 0 ){
      $subscribeForm.each( function(){
        var el = $(this),
          elResult = el.find('.subscribe-form-result');

        el.find('form').validate({
          submitHandler: function(form) {
            elResult.fadeOut( 500 );

            $(form).ajaxSubmit({
              target: elResult,
              dataType: 'json',
              resetForm: true,
              success: function( data ) {
                elResult.html( data.message ).fadeIn( 500 );
                if( data.alert != 'error' ) {
                  $(form).clearForm();
                  setTimeout(function(){
                    elResult.fadeOut( 500 );
                  }, 5000);
                };
              }
            });
          }
        });

      });
    }
  }

  // [10. Contact Form]
  function mileno_contactForm(){
    var $contactForm = $('.contact-form');

    if ( $contactForm.length > 0 ){
      $contactForm.each( function(){
        var el = $(this),
          elResult = el.find('.contact-form-result');

        el.find('form').validate({
          submitHandler: function(form) {
            elResult.fadeOut( 500 );

            $(form).ajaxSubmit({
              target: elResult,
              dataType: 'json',
              success: function( data ) {
                elResult.html( data.message ).fadeIn( 500 );
                if( data.alert != 'error' ) {
                  $(form).clearForm();
                  setTimeout(function(){
                    elResult.fadeOut( 500 );
                  }, 5000);
                };
              }
            });
          }
        });

      });
    }
  }

  // [11. Bootstrap]
  function mileno_bootstrap(){

    // Botostrap Tootltips
    $('[data-toggle="tooltip"]').tooltip();

    // Bootstrap Popovers
    $('[data-toggle="popover"]').popover();

    // Modals
    $('.modal').on('show.bs.modal', function(e){
      var scrollbarWidth = getScrollbarWidth();
      hideScrollbar();
      $body.css('padding-right',scrollbarWidth);
      $('.overlay.overlay-global').css('right',scrollbarWidth);
      $('.site-navbar.site-navbar-absolute').css('right',scrollbarWidth);
      $('.site-navbar.site-navbar-fixed').css('right',scrollbarWidth);
      $('.website-slider-buttons').css( 'right', 16 + scrollbarWidth );
    });

    $('.modal').on('hidden.bs.modal', function(e){
      resetScrollbar();
      $body.css('padding-right','');
      $('.overlay.overlay-global').css('right','');
      $('.site-navbar.site-navbar-absolute').css('right','');
      $('.site-navbar.site-navbar-fixed').css('right','');
      $('.website-slider-buttons').css('right','');

      setOverflowScroll();
    });

  }

  // [12. Typed text]
  function mileno_typedText(){
    var toggle = document.querySelectorAll('[data-toggle="typed"]');

    function init(el) {
      var elementOptions = el.dataset.options;
          elementOptions = elementOptions ? JSON.parse(elementOptions) : {};
      var defaultOptions = {
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 3000,
        loop: true
      }
      var options = Object.assign(defaultOptions, elementOptions);

      new Typed(el, options);
    }

    if (typeof Typed !== 'undefined' && toggle) {
      [].forEach.call(toggle, function(el) {
        init(el);
      });
    }

  }

  $(document).ready(function($){
    websiteSlider.init();

    mileno_navigation();
    mileno_navOnScroll();
    mileno_layoutResize();
    mileno_backgrounds();
    mileno_granim();
    mileno_lightbox();
    mileno_countdown();
    mileno_subscribeForm();
    mileno_contactForm();
    mileno_bootstrap();
    mileno_typedText();
  });

  $(window).on( 'scroll', function(){
    mileno_navOnScroll();
  });

  var clear_websiteSlider_layout;

  $(window).on('resize', function(){
    mileno_navOnScroll();
    clear_websiteSlider_layout = setTimeout( websiteSlider.resize(), 20 );
  });

  window.addEventListener( 'load', function(){
    websiteSlider.load();;
    websiteSlider.showFirstSlide();
  });

})(jQuery);