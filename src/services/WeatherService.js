import config from '../config';

export default class WeatherService {
    static async get(cityName) {
        const current = await WeatherService.getCurrent(cityName);
        
        const { lat, lon } = current.coord;
        const { daily } = await WeatherService.getDaily(lat, lon);

        return { current, daily };
    }

    static async getCurrent(cityName) {
        const requestURL = WeatherService.buildCurrentURL(cityName);
        return fetch(requestURL).then(res => res.json());
    }

    static async getDaily(lat, lon) {
        const requestURL = WeatherService.buildDailyURL(lat, lon);
        return fetch(requestURL).then(res => res.json());
    }


    static buildCurrentURL(cityName) {
        const url = new URL(config.currentWeatherPath, config.WEATHER_API_URL);
    
        url.searchParams.append('q', cityName)
        url.searchParams.append('appid', config.API_KEY);
    
        return url;
    };

    static buildDailyURL(lat, lon) {
        const url = new URL(config.dailyWeatherPath, config.WEATHER_API_URL);
    
        url.searchParams.append('lat', lat);
        url.searchParams.append('lon', lon);
        url.searchParams.append('units', 'metric');
        url.searchParams.append('exclude', 'minutely, hourly, current, alerts');
        url.searchParams.append('appid', config.API_KEY);

        return url;
    };
};