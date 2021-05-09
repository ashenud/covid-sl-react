/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {    
  Container,
  Row,
  Col,
  Button,
  Card, CardText, CardHeader, CardBody, CardLink, CardTitle, CardFooter
} from "reactstrap";

export default function SubFigures() {
  
    return (
        <React.Fragment>           
            <Col xl="6" sm="4" className="card-col">
                <Card className="card-stats one"> 
                    <CardBody >
                        <div className="details d-flex">
                            <div className="card-icon one">
                                <i className="fas fa-clipboard-list"></i>
                            </div>
                            <CardTitle><h3 id="total-cases"></h3></CardTitle>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <p className="card-category">Confirmed</p>
                    </CardFooter>
                </Card> 
            </Col>
        </React.Fragment>
    );
}
