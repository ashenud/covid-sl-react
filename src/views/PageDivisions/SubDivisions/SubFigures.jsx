import React from "react";

// reactstrap components
import { Col, Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import CountUp from 'react-countup';

export default function SubFigures({ count, name, icon, color_class }) {

    return (
        <React.Fragment>           
            <Col xl="6" sm="4" className="card-col">
                <Card className={"card-stats "+ color_class}> 
                    <CardBody >
                        <div className="details d-flex">
                            <div className={"card-icon "+ color_class}>
                                <i className={icon}></i>
                            </div>
                            <CardTitle>
                                <h3 id="total-cases">
                                    { !count ? "Loading" : <CountUp start={0} end={count} duration={2.5} separator=","/>}
                                </h3>
                            </CardTitle>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <p className="card-category">{name}</p>
                    </CardFooter>
                </Card> 
            </Col>
        </React.Fragment>
    );
    
}
