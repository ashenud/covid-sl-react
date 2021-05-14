import React from "react";

// reactstrap components
import { Col } from "reactstrap";
import MapBox from "../Map/MapBox";

const MapArea = () => {

    return (
        <React.Fragment>
            <Col md="6" xl="6" className="order-xl-5 order-4 map-district-distribution map">

                <div id="map-wrapper" className="card card-area card-map container-fluid mt-4 mb-1 wow zoomIn" data-wow-duration="2s">
                    <div className="card-header figure-heding">
                        <div className="row">
                            <h4>District Distribution (LOCAL)</h4>
                            <div className="switch-wrapper map-type-switch">
                                <label htmlFor="map-switcher" className="normal-english">Animated/Static</label>
                                <input className="type-switch" id="map-switcher" type="checkbox" name="map-switcher" autoComplete="off"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body chart-body  map-body">
                        <MapBox/>
                        <div id="animated-mapoverlaycontainer" className="map-overlay-container">
                            <div className="map-overlay">
                                <h2 id="location-title"><span className="normal-english"></span></h2>
                                <p id="location-description" className="normal-english"> <span></span> Confirmed Cases</p>
                            </div>
                        </div>
                    </div>                        
                </div>

            </Col>
        </React.Fragment>
    );

}

export default MapArea;
