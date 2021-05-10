import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row,  Card, CardHeader } from "reactstrap";

import { fetchTimeLineData } from '../../api';
import { getModifiedChartData } from '../../js';
import  BarChart  from "./BarChart";

const ChartCard = ( {data} ) => {

    const [timeLineData, setTimeLineData] = useState({});

    const country = "lk";

    useEffect( () => {
        const fetchAPI = async () => {
            setTimeLineData(await fetchTimeLineData(country));
        }
        fetchAPI();
    }, []);


    var modifiedData = {};

    if(timeLineData.timeline)
        modifiedData = getModifiedChartData(timeLineData,data.type)

    return (
        <React.Fragment>            
            <Card className="card card-area card-chart mt-4 mb-1">
                <Container fluid={true}>                                        
                    <Row>
                        <CardHeader className="figure-heding">
                            <h4 id="show">{data.card_header}</h4>
                        </CardHeader>
                    </Row>
                    <div className={"card-body chart-body "+data.color_class}>
                        {(data.chart_type === 'bar') ? <BarChart chartData={modifiedData}/> : null}
                    </div>
                </Container>
            </Card>
        </React.Fragment>
    );

}

export default ChartCard;
