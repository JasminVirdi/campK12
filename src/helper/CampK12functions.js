let weather = require('openweather-apis');
let openWeatherKey = require('./../constants/appId')
class CampK12 {

    constructor() {
        weather.setLang('en');
        // English - en, Russian - ru, Italian - it, Spanish - es (or sp),
        // Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
        // Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
        // Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
        // Turkish - tr, Croatian - hr, Catalan - ca

        // set city by name
        // or set the coordinates (latitude,longitude)
        // weather.setCoordinate(50.0467656, 20.0048731);
        // // or set city by ID (recommended by OpenWeatherMap)
        // weather.setCityId(4367872);

        // // or set zip code
        // weather.setZipCode(33615);

        // 'metric'  'internal'  'imperial'
        ;

    }

    weatherDetails(cityName) {
        weather.setCity(cityName);
        weather.setUnits('metric');
        // check http://openweathermap.org/appid#get for get the APPID
        weather.setAPPID(openWeatherKey);

        let temprature = weather.getTemperature((err, temp) => temp);
        let pressure = weather.getPressure((err, pres) => pres);
        let humidity = weather.getHumidity((err, hum) => hum);
        let description = weather.getDescription((err, desc) => desc);
        let allWeather = weather.getAllWeather((err, JSONObj) => JSONObj);

        return { temprature, pressure, humidity, description, allWeather }
    }
}

export default CampK12;