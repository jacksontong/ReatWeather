import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b20cdfe7fb9fbba3498ffde932ca5d59&units=metric';
const openWeatherMap = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  }
};

export default openWeatherMap;