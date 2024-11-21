import { weatherAdapter } from "../adapter/weatherAdapter";
import api from "../api/api";

export async function getLocalWeather(local: string) {
  const newApi = api(`${import.meta.env.VITE_OPENWEATHER_API}`);
  const response = await newApi.get(
    `/data/2.5/weather?q=${local}&APPID=${
      import.meta.env.VITE_OPENWEATHER_TOKEN
    }&units=metric`
  );

  return weatherAdapter(response.data);
}

export async function getCurrentLocation(position: Record<string, any>) {
  const newApi = api(`${import.meta.env.VITE_OPENWEATHER_API}`);
  const response = await newApi.get(
    `/data/2.5/weather?lat=${position.latitude}&lon=${
      position.longitude
    }&APPID=${import.meta.env.VITE_OPENWEATHER_TOKEN}&units=metric`
  );

  return weatherAdapter(response.data);
}
