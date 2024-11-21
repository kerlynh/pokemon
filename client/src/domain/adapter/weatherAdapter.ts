import { Weather } from "../../types/weather";

export function weatherAdapter(response: any): Weather {
  // const description = ["rain", "shower rain", "thunderstorm", "broken clouds"];
  if (!response) throw new Error("error to get weather");
  const weather = {
    main: response.weather[0].main,
    description: response.weather[0].description,
    icon: response.weather[0].icon,
  };

  const main = {
    temp: response.main.temp,
    feels_like: response.main.feels_like,
    temp_min: response.main.temp_min,
    temp_max: response.main.temp_max,
  };

  const name = response.name;

  return { weather, main, name };
}
