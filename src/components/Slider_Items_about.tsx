import React, {useCallback} from "react";


class Slider_Items_about extends React.Component<any, any>{
    render() {
        return (
            <div className="website-slider-item bg-transparent" id="about" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">

                    <div className="container text-center text-white">
                        <h2 className="h1">About Us</h2>
                        <div className="divider bg-white mx-auto"></div>
                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto">

                                <div className="d-table mx-auto mb-7">
                                    <div className="nav nav-pills-modern nav-pills-modern-soft-light justify-content-center rounded" id="about-tab" role="tablist">
                                        <a className="nav-link active" id="tab-forward-tab" data-toggle="pill" href="#tab-forward" role="tab" aria-controls="tab-forward" aria-selected="true">
                                            Forward
                                        </a>
                                        <a className="nav-link" id="tab-together-tab" data-toggle="pill" href="#tab-together" role="tab" aria-controls="tab-together" aria-selected="false">
                                            Together
                                        </a>
                                        <a className="nav-link" id="tab-tools-tab" data-toggle="pill" href="#tab-tools" role="tab" aria-controls="tab-tools" aria-selected="false">
                                            Tools
                                        </a>
                                    </div>
                                </div>

                                <div className="tab-content" id="tabContent">
                                    <div className="tab-pane fade show active" id="tab-forward" role="tabpanel" aria-labelledby="tab-forward-tab">

                                        <p>Pellentesque commodo vehicula turpis, suscipit suscipit libero mollis vitae. Ut imperdiet leo in neque interdum efficitur. Nullam non gravida lectus, sit amet cursus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed varius ex sed nisl congue rhoncus. Vestibulum vitae nibh vitae ante pretium efficitur ac vitae nunc. Quisque a imperdiet nulla. Fusce et leo blandit, venenatis libero vitae, fermentum lacus. Integer maximus et arcu vitae scelerisque. Proin molestie pretium nunc, id rutrum nisi tempus commodo. Sed laoreet, mi in facilisis dictum, lacus purus cursus mi, ut condimentum sem justo ac enim. Nulla at magna lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas condimentum a massa ut tincidunt.</p>

                                    </div>
                                    <div className="tab-pane fade" id="tab-together" role="tabpanel" aria-labelledby="tab-together-tab">

                                        <p>Etiam in purus quis nulla placerat lobortis at quis sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse venenatis maximus rutrum. Vivamus malesuada augue sit amet nunc blandit, eget porttitor tellus tempus. Nulla sodales ante ut augue feugiat accumsan. Suspendisse sem dolor, hendrerit sit amet venenatis in, facilisis nec diam. Mauris feugiat magna ac tincidunt molestie. Nulla commodo purus mauris, a ultricies velit sagittis nec. Fusce iaculis mi ac libero rhoncus, sed mollis felis dapibus. Duis sed dolor at felis sodales aliquet. Praesent imperdiet nunc sed sapien semper, at accumsan arcu venenatis. Mauris id vestibulum mauris. Proin at luctus neque. Sed ac diam eu orci consequat iaculis. Integer at blandit magna. Donec condimentum sed nibh eget interdum. Aliquam in nulla metus.</p>

                                    </div>
                                    <div className="tab-pane fade" id="tab-tools" role="tabpanel" aria-labelledby="tab-tools-tab">

                                        <p>Morbi nec rutrum dui. Praesent placerat eleifend nisl eu accumsan. Quisque vulputate ante vel lorem iaculis cursus. Maecenas orci lorem, aliquet sed dui ut, venenatis convallis magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida dapibus diam. Nunc eget felis id enim commodo mattis. Pellentesque facilisis fringilla orci, a malesuada mauris vestibulum nec. Praesent bibendum ultricies feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam tempus ac sapien non viverra. Curabitur sed condimentum sapien, non pellentesque turpis. Proin risus diam, sagittis at facilisis quis, vestibulum a eros. Curabitur bibendum ultricies velit id finibus. Mauris ornare finibus turpis, ac commodo nisi convallis at. Nunc enim mauris, ultrices vitae amet.</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}
export default Slider_Items_about;