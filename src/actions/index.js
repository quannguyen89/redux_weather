import axios from 'axios';
const API_KEY = '8c04bb0057a78f7ba6eaf1ac0a86a1de';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},vn`;

    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
