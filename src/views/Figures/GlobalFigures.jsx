import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row, Col, Card, CardHeader } from "reactstrap";
import Moment from 'react-moment';


import SubFigures from './SubFigures'
import { fetchDailyGlobalData } from '../../api';

const GlobalFigures = () => {

    const [dailyData, setDAilyData] = useState({});

    useEffect( () => {
        const fetchAPI = async () => {
            setDAilyData(await fetchDailyGlobalData());
        }
        fetchAPI();
    }, []);

    // console.log(dailyData);

    return (
        <React.Fragment>
            <Col xl="3" lg="6" md="12" className="global order-xl-3 order-2">
                <Card className="card-area mt-4 mb-1">
                    <Container fluid={true}>                                        
                        <Row>
                            <CardHeader className="figure-heding">
                                <h4 id="show">Total Figures (GLOBAL)</h4>
                            </CardHeader>
                        </Row>
                        <Row className="card-row">
                            <SubFigures count={dailyData.total_cases} name={"CONFIRMED"} icon={"fas fa-clipboard-list"} color_class={"one"}/>
                            <SubFigures count={dailyData.active_cases} name={"ACTIVE"} icon={"fas fa-procedures"} color_class={"one"}/>
                            <SubFigures count={dailyData.new_cases} name={"NEW"} icon={"fas fa-ambulance"} color_class={"one"}/>
                            <SubFigures count={dailyData.recovered} name={"RECOVERED"} icon={"fas fa-hand-holding-heart"} color_class={"two"}/>
                            <SubFigures count={dailyData.deaths} name={"DEATHS"} icon={"fas fa-heart-broken"} color_class={"one"}/>
                            <SubFigures count={dailyData.new_deaths} name={"NEW DEATHS"} icon={"fas fa-clinic-medical"} color_class={"one"}/>
                        </Row>
                        <div className="card-footer time-footer">
                            <div className="row update-time">
                                <p className="card-category">
                                    Last time update on <span id="update-global-date"><Moment format="YYYY-MM-DD">{dailyData.updated_at}</Moment></span> at <span id="update-global-time"><Moment format="hh:mm">{dailyData.updated_at}</Moment></span>
                                </p>
                            </div>
                        </div>
                    </Container>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default GlobalFigures;
