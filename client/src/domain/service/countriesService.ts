import { countriesAdapter } from "../adapter/countriesAdapter";
import api from "../api/api";

export async function getCountries() {
  const newApi = api(import.meta.env.VITE_COUNTRIES_API);
  const response = await newApi.get("/countries");

  return countriesAdapter(response.data);
}
