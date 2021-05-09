import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row, Col, Card, CardHeader } from "reactstrap";
import { Bar } from 'react-chartjs-2';

import { fetchTimeLineData } from '../../api';

const LocalTimeLine = () => {

    const [timeLineData, setTimeLineData] = useState({});

    useEffect( () => {
        const fetchAPI = async () => {
            setTimeLineData(await fetchTimeLineData());
        }
        fetchAPI();
    }, []);

    console.log(timeLineData);

    const barChart = (

        // timeLineData.length ? (
            <Bar
                data={{
                    labels: timeLineData.timeline_date,
                    datasets: [{
                        data: timeLineData.new_confirmed,
                        label: 'New Confirmed',
                        borderWidth: 1,
                        backgroundColor: '#f44336',
                        fill: true,
                    }]
                }}
                options={{
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 250,
                                fontColor: 'rgba(255, 255, 255, 0.7)',                           
                                fontSize: 7,
                                padding: 5,
                            },
                            gridLines: false
                        }],
                        xAxes: [{
                            barPercentage: 0.4,
                            ticks: {
                                fontColor: 'rgba(255, 255, 255, 0.7)',
                                fontSize: 9,
                                padding: 10,
                                autoSkipPadding: 10,
                                maxRotation: 0 
                            },
                            gridLines: false
                        }]
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            // this callback is used to create the tooltip label
                            label: function (tooltipItem, data) {
                                // get the data label and data value to display
                                // convert the data value to local string so it uses a comma seperated number
                                var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                dataLabel += value;

                                // return the text to display on the tooltip
                                return dataLabel;
                            }
                        }
                    },
                }}
            /> 
        // ) : null
    );

    return (
        <React.Fragment>
            <Col md="6" className="order-xl-2 order-3 chart-local-timeline">
                <Card className="card card-area card-chart mt-4 mb-1">
                    <Container fluid={true}>                                        
                        <Row>
                            <CardHeader className="figure-heding">
                                <h4 id="show">Daily Cases (LOCAL)</h4>
                            </CardHeader>
                        </Row>
                        <div className="card-body chart-body one">
                            {barChart}
                        </div>
                    </Container>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default LocalTimeLine;
