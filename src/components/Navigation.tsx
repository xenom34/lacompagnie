import React, {useCallback} from "react";


class Features extends React.Component<any, any>{
    render() {
        return (
<nav id="siteNavbar"
     className="site-navbar site-navbar-transparent navbar navbar-expand-lg navbar-dark bg-white shadow-light-lg site-navbar-absolute py-2"
     data-navbar-base="navbar-dark" data-navbar-scrolled="navbar-light" data-navbar-toggled="navbar-light">

    <a className="navbar-brand" href="index.html">
        <img src="assets/images/logo-white.png" alt="" className="navbar-brand-img navbar-brand-img-light"/>
            <img src="assets/images/logo-dark.png" alt="" className="navbar-brand-img navbar-brand-img-dark"/>
    </a>

    <button className="navbar-toggler-alternative" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-alternative-icon">
          <span></span>
        </span>
    </button>

    <div className="navbar-collapse collapse" id="navbarCollapse">

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link scrollto" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link scrollto" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link scrollto" href="#solutions">Solutions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link scrollto" href="#features">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link scrollto" href="#services">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link scrollto" href="#contact">Contact</a>
            </li>
        </ul>

        <a className="btn btn-white d-block d-lg-inline-block ml-lg-3"
           href="https://themeforest.net/user/erilisdesign/portfolio" target="_blank" rel="noopener nofollow"
           data-on-navbar-light="btn-primary" data-on-navbar-dark="btn-white">Buy now</a>

    </div>
</nav>
    )
    }

    }