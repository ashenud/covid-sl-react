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

import SubFigures from './SubFigures'

// reactstrap components
import {    
  Container,
  Row,
  Col,
  Button,
  Card, CardText, CardHeader, CardBody, CardLink, CardTitle, CardFooter
} from "reactstrap";

export default function LocalFigures() {
  
    return (
        <div className="section section-basic" id="basic-elements">                
            <Container fluid={true}>
                    <Row>
                        <Col xl="3" lg="6" md="12">
                            <Card className="card-area">
                                <Container fluid={true}>                                        
                                    <Row>
                                        <CardHeader className="figure-heding">
                                            <h4 id="show">Total Figures (LOCAL)</h4>
                                        </CardHeader>
                                    </Row>
                                    <Row className="card-row">
                                        <SubFigures />
                                        <SubFigures />
                                        <SubFigures />
                                        <SubFigures />
                                        <SubFigures />
                                        <SubFigures />
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}
