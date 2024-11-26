import axios from "axios";

const URL = `http://api.weatherapi.com/v1/forecast.json`;
const DAYS = 3;

async function fetchForecast(location) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: location,
        days: DAYS,
      },
      responseType: "json",
    });

    const name = response.data.location.name;
    const country = response.data.location.country;
    const locationData = `${name}, ${country}`;

    const forecastData = response.data.forecast.forecastday.map(
      (forecastday) => {
        return {
          date: forecastday.date,
          maxTempC: forecastday.day.maxtemp_c,
          minTempC: forecastday.day.mintemp_c,
          maxTempF: forecastday.day.maxtemp_f,
          minTempF: forecastday.day.mintemp_f,
        };
      }
    );

    return { locationData, forecastData };
  } catch (error) {
    console.error(error.message);
  }
}

export { fetchForecast };
