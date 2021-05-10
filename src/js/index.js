export const getModifiedChartData = (timeLineData,type) => {
    try {

        var modifiedData = {};
        let data_labels = [];
        let datasets_data = [];

        var skiped_days = 0;
        if(type === "daily_cases") {
            skiped_days = 310;
            let visible_days =timeLineData.timeline.length-skiped_days;

            let i;
            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData.timeline[i].date.substr(5,5));
                datasets_data.push(timeLineData.timeline[i].new_confirmed);
            }

            modifiedData = {
                data_labels:data_labels,
                datasets_data:datasets_data, 
                datasets_label: 'New Confirmed',
                datasets_borderWidth: 1,
                datasets_backgroundColor: '#f44336',
                datasets_fill: true,
                datasets_barPercentage: '0.4',
                legend_display: false,
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,               
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 10,
                xAxes_maxRotation: 0,
                xAxes_gridLines: false
            };

        }
        if(type === "local_recovery") {
            skiped_days = 310;
            let visible_days =timeLineData.timeline.length-skiped_days;

            let i;
            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData.timeline[i].date.substr(5,5));
                datasets_data.push(timeLineData.timeline[i].new_recovered);
            }

            modifiedData = {
                data_labels:data_labels,
                datasets_data:datasets_data, 
                datasets_label: 'New Recovered',
                datasets_borderWidth: 1,
                datasets_backgroundColor: 'rgba(76, 175, 80, 0.6)',
                datasets_fill: true,
                datasets_barPercentage: '0.4',
                legend_display: false,
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,               
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false
            };

        }

        return modifiedData;

    }
    catch (error) {
        console.log(error);
    }
}