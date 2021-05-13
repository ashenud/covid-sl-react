import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row,  Card, CardHeader } from "reactstrap";

import { fetchTimeLineData } from '../../api';
import { getModifiedChartData } from '../../js';
import  BarChart  from "./BarChart";
import  DoughnutChart  from "./DoughnutChart";
import  LineChart  from "./LineChart";

const ChartCard = ( {data} ) => {

    const [chartCardData, setChartCardData] = useState({
        timeLineData : {},
    });

    useEffect( () => {
        const fetchAPI = async () => {
            setChartCardData({
                timeLineData : await fetchTimeLineData(data.type)
            });
        }
        fetchAPI();
    }, [data.type]);

    var modifiedData = {};

    if(chartCardData.timeLineData.timeline || chartCardData.timeLineData[0])
        modifiedData = getModifiedChartData(chartCardData.timeLineData,data.data_type)

    // console.log(chartCardData.timeLineData);

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
                        { (data.chart_type === 'bar') ? 
                                <BarChart chartData={modifiedData}/> : 
                                    (data.chart_type === 'doughnut') ? 
                                        <DoughnutChart chartData={modifiedData}/> :
                                            (data.chart_type === 'line') ? 
                                                <LineChart chartData={modifiedData}/> : null }
                    </div>
                </Container>
            </Card>
        </React.Fragment>
    );

}

export default ChartCard;
