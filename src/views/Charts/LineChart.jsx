import React from "react";

import { Line } from 'react-chartjs-2';

const LineChart = ( {chartData} ) => {

    const lineChart = (

        <Line
            data={{
                labels: chartData.data_labels,
                datasets: chartData.datasets,
            }}
            options={{
                legend: {
                    display: chartData.legend_display,
                    position: chartData.legend_position,
                    labels: {
                        usePointStyle: chartData.legend_labels_usePointStyle,
                        fontColor: chartData.legend_labels_fontColor,
                        fontSize: chartData.legend_labels_fontSize,
                    },
                },
                scales: {
                    yAxes: [{
                        type: chartData.yAxes_type,
                        ticks: {
                            beginAtZero: chartData.beginAtZero,
                            stepSize: chartData.yAxes_stepSize,
                            fontColor: chartData.yAxes_fontColor,                           
                            fontSize: chartData.yAxes_fontSize,
                            padding: chartData.yAxes_padding,
                            callback: function (value, index, values) {
                                return value / chartData.yAxes_callback_size + chartData.yAxes_callback_mark;
                            }
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
                        label: function (tooltipItem, data) {
                            var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                            dataLabel += value;
                            return dataLabel;
                        }
                    }
                },
                hover: {
                    mode: chartData.hover_mode,
                    intersect: chartData.hover_intersect
                },
            }}
        /> 
    );

    return (
        <React.Fragment>
            {lineChart}
        </React.Fragment>
    );
}

export default LineChart;
