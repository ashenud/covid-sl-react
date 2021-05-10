import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const settings = {
    getCurrentStatistical: "https://www.hpb.health.gov.lk/api/get-current-statistical",
    coronaTimeline: "https://corona-api.com/timeline",
    localTimeline: "https://corona-api.com/countries/",
};

export const fetchDailyLocalData = async () => {
    try {
        const  { data }  = await axios.get(settings.getCurrentStatistical);

        const dailyData = data['data'];

        const modifiedData = {
            total_cases:dailyData.local_total_cases,
            active_cases:dailyData.local_active_cases,
            new_cases:dailyData.local_new_cases,
            deaths:dailyData.local_deaths,
            suspected:dailyData.local_total_number_of_individuals_in_hospitals,
            recovered:dailyData.local_recovered,
            updated_at:dailyData.update_date_time,
        };

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchDailyGlobalData = async () => {
    try {
        const  { data }  = await axios.get(settings.coronaTimeline);

        const dailyData = data.data[0];

        const modifiedData = {
            total_cases:dailyData.confirmed,
            active_cases:dailyData.active,
            new_cases:dailyData.new_confirmed,
            recovered:dailyData.recovered,
            deaths:dailyData.deaths,
            new_deaths:dailyData.new_deaths,
            updated_at:dailyData.updated_at,
        };

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchTimeLineData = async (country) => {
    try {

        const url = `${settings.localTimeline}${country}`
        const  { data }  = await axios.get(url);
        
        const dailyData = data.data;
        return dailyData;

    }
    catch (error) {
        console.log(error);
    }
}




/* ---------------------------------------------------- */

export const fetchDailyDataold = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData = async (country) => {
    let changebleUrl = url;

    if(country) {
        changebleUrl = `${url}/countries/${country}`
    }

    try {
        const {data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changebleUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}