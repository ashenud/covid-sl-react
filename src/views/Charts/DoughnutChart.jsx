import React from "react";

import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ( {chartData} ) => {

    const doughnutChart = (

        <Doughnut
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
            {doughnutChart}
        </React.Fragment>
    );
}

export default DoughnutChart;
