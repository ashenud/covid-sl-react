export const getModifiedChartData = (timeLineData,type) => {
    try {

        var modifiedData = {};
        var data_labels = [];
        var datasets = [];
        var datasets_data = [];
        var staticColors = [];
        var i, skiped_days, visible_days;

        if(type === "daily_cases") {
            skiped_days = 310;
            visible_days =timeLineData.timeline.length-skiped_days;

            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData.timeline[i].date.substr(5,5));
                datasets_data.push(timeLineData.timeline[i].new_confirmed);
            }

            datasets.push({
                label: 'New Confirmed',
                data: datasets_data,
                borderColor: false,
                borderWidth: 1,
                pointRadius: 0,   
                backgroundColor: '#f44336',
                fill: true,
                pointStyle: false,                 
                barPercentage: '0.4'
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets:datasets,
                legend_display: false,
                legend_position: 'bottom',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 10,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,                   
                yAxes_callback: 1e6,           
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 10,
                xAxes_maxRotation: 0,
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "local_recovery") {
            skiped_days = 310;
            visible_days =timeLineData.timeline.length-skiped_days;

            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData.timeline[i].date.substr(5,5));
                datasets_data.push(timeLineData.timeline[i].new_recovered);
            }

            datasets.push({
                label: 'New Recovered',
                data: datasets_data,
                borderColor: false,
                borderWidth: 1,
                pointRadius: 0,   
                backgroundColor: 'rgba(76, 175, 80, 0.6)',
                fill: true,
                pointStyle: false,                 
                barPercentage: '0.4'
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets: datasets,
                legend_display: false,
                legend_position: 'bottom',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 10,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,                   
                yAxes_callback: 1e6,           
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "local_total_breakdown") {
            
            data_labels = ['Active Cases','Recoveries','Deaths'];

            datasets_data.push(timeLineData.timeline[0].active);
            datasets_data.push(timeLineData.timeline[0].recovered);
            datasets_data.push(timeLineData.timeline[0].deaths);
            
            staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

            datasets.push({
                label: 'New Recovered',
                data: datasets_data,
                borderColor: 'rgba(0,188,212, 0.6)',
                borderWidth: 0,
                pointRadius: 0,   
                backgroundColor: staticColors,
                fill: false,
                pointStyle: 'line',                 
                barPercentage: '0.4'
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets:datasets, 
                legend_display: true,
                legend_position: 'bottom',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 10,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,                 
                yAxes_callback: 1e6,             
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "local_total_vs_active") {
            
            skiped_days = 14;
            visible_days =timeLineData.timeline.length-skiped_days;

            let total = [];
            let active = [];
            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData.timeline[i].date.substr(5,5));
                total.push(timeLineData.timeline[i].confirmed);
                active.push(timeLineData.timeline[i].active);                
            }   

            datasets.push({
                label: 'Total cases',
                data: total,
                borderColor: 'rgba(0,188,212, 0.6)',
                borderWidth: 2,
                pointRadius: 0,  
                backgroundColor: 'rgba(0,188,212, 1)',
                fill: false,
                pointStyle: 'line',                  
                barPercentage: false
            }); 

            datasets.push({
                label: 'Active cases',
                data: active,
                borderColor: 'rgba(156, 39, 176, 0.6)',
                backgroundColor: 'rgba(156, 39, 176, 1)',
                fill: false,
                pointStyle: 'line',
                borderWidth: 2,
                pointRadius: 0,                    
                datasets_barPercentage: false
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets: datasets,
                legend_display: true,
                legend_position: 'top',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 11,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 20000,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,                   
                yAxes_callback_size: 1e3,           
                yAxes_callback_mark: 'K',           
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 10,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "global_total_growth") {
            
            skiped_days = 2;
            visible_days =timeLineData.length-skiped_days;

            let total = [];
            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData[i].date.substr(5,5));
                total.push(timeLineData[i].confirmed);              
            }   

            datasets.push({
                label: 'Total cases',
                data: total,
                borderColor: 'rgba(255, 152, 0, 1)',
                borderWidth: 3,
                pointRadius: 0,  
                backgroundColor: 'rgba(255, 152, 0, 1)',
                fill: false,
                pointStyle: 'line',                  
                barPercentage: false
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets: datasets,
                legend_display: true,
                legend_position: 'top',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 11,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 40000000,
                yAxes_fontSize: 8,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,               
                yAxes_callback_size: 1e6,          
                yAxes_callback_mark: 'M',                
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 8,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 10,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "global_total_breakdown") {
            
            data_labels = ['Active Cases','Recoveries','Deaths'];

            datasets_data.push(timeLineData[0].active);
            datasets_data.push(timeLineData[0].recovered);
            datasets_data.push(timeLineData[0].deaths);
            
            staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

            datasets.push({
                label: 'New Recovered',
                data: datasets_data,
                borderColor: 'rgba(0,188,212, 0.6)',
                borderWidth: 0,
                pointRadius: 0,   
                backgroundColor: staticColors,
                fill: false,
                pointStyle: 'line',                 
                barPercentage: '0.4'
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets:datasets, 
                legend_display: true,
                legend_position: 'bottom',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 10,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 250,
                yAxes_fontSize: 7,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 5,                 
                yAxes_callback: 1e6,             
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 9,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        if(type === "global_new_vs_recovery") {
            
            skiped_days = 14;
            visible_days =timeLineData.length-skiped_days;

            let new_cases = [];
            let new_recoveries = [];
            for (i = visible_days; i >= 0; i--) {
                data_labels.push(timeLineData[i].date.substr(5,5));
                new_cases.push(timeLineData[i].new_confirmed);
                new_recoveries.push(timeLineData[i].new_recovered);                
            }

            datasets.push({
                label: 'New Cases',
                data: new_cases,
                borderColor: '#f44336',
                borderWidth: 1,
                pointRadius: 0,  
                backgroundColor: '#f44336',
                fill: false,
                pointStyle: 'line',                  
                barPercentage: false
            }); 

            datasets.push({
                label: 'New Recoveries',
                data: new_recoveries,
                borderColor: 'rgba(76, 175, 80, 1)',
                borderWidth: 1,
                pointRadius: 0,  
                backgroundColor: 'rgba(76, 175, 80, 1)',
                fill: false,
                pointStyle: 'line',                  
                datasets_barPercentage: false
            }); 

            modifiedData = {
                data_labels:data_labels,
                datasets: datasets,
                legend_display: true,
                legend_position: 'top',
                legend_labels_usePointStyle: true,
                legend_labels_fontColor: '#fff',
                legend_labels_fontSize: 11,
                yAxes_type: 'linear',
                yAxes_beginAtZero: true,
                yAxes_stepSize: 500000,
                yAxes_fontSize: 10,
                yAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                yAxes_padding: 10,                   
                yAxes_callback_size: 1e3,           
                yAxes_callback_mark: 'K',           
                yAxes_gridLines: false,
                xAxes_fontColor: 'rgba(255, 255, 255, 0.7)',
                xAxes_fontSize: 10,
                xAxes_padding: 10,
                xAxes_autoSkipPadding: 15,
                xAxes_maxRotation: 0,                
                xAxes_gridLines: false,
                hover_mode: 'index',
                hover_intersect: false,
                responsive: true
            };

        }
        
        return modifiedData;

    }
    catch (error) {
        console.log(error);
    }
}


export const getModifiedMapData = (mapData,type) => {
    try {

        var modifiedData = [];

        if(type === "static_map" && Array.isArray(mapData)) {

            mapData.map((data, i) => {     

                var featureOBJ = {
                    "type": "Feature",
                    "properties": {
                        'camera': {
                            center: [],
                            bearing: -8.9,
                            zoom: 11.68
                        }
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": []
                    }
                };

                featureOBJ.properties.DistrictEn = data.prefecture;
                featureOBJ.properties.DistrictSin = data.prefecture_si;
                featureOBJ.properties.Cases = parseInt(data.cases);
                featureOBJ.properties.index = i - 1;
                featureOBJ.properties.Recovered = parseInt(data.recovered);
                featureOBJ.properties.Deaths = parseInt(data.deaths);

                featureOBJ.properties.camera.center.push(data.longitude);
                featureOBJ.properties.camera.center.push(data.latitude);

                featureOBJ.geometry.coordinates.push(data.longitude);
                featureOBJ.geometry.coordinates.push(data.latitude);
                featureOBJ.properties.type = data.type;

                modifiedData.push(featureOBJ)    
                
                return null; // callback of map
                
            });

        }
        
        return modifiedData;

    }
    catch (error) {
        console.log(error);
    }
}