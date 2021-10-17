import React from "react";

import { Bar } from 'react-chartjs-2';

const BarChart = ( {chartData} ) => {

    const barChart = (

        <Bar
            data={{
                labels: chartData.data_labels,
                datasets: chartData.datasets,
            }}
            options={{
                legend: {
                    display: chartData.legend_display
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: chartData.beginAtZero,
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
                        label: function (tooltipItem, data) {
                            var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                            dataLabel += value;
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
