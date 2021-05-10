import React from "react";

import { Bar } from 'react-chartjs-2';

const BarChart = ( {chartData} ) => {

    const barChart = (

        <Bar
            data={{
                labels: chartData.data_labels,
                datasets: [{
                    data: chartData.datasets_data,
                    label: chartData.datasets_label,
                    borderWidth: chartData.datasets_borderWidth,
                    backgroundColor: chartData.datasets_backgroundColor,
                    fill: chartData.datasets_fill,
                    barPercentage: chartData.datasets_barPercentage,
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
                            stepSize: chartData.yAxes_stepSize,
                            fontColor: chartData.yAxes_fontColor,                           
                            fontSize: chartData.yAxes_fontSize,
                            padding: chartData.yAxes_padding,
                        },
                        gridLines: false
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: chartData.xAxes_fontColor,
                            fontSize: chartData.xAxes_fontSize,
                            padding: chartData.xAxes_padding,
                            autoSkipPadding: chartData.xAxes_autoSkipPadding,
                            maxRotation: chartData.xAxes_maxRotation, 
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
    );

    return (
        <React.Fragment>
            {barChart}
        </React.Fragment>
    );
}

export default BarChart;