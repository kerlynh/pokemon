import { porkemonAdapter } from "../adapter/pokemonAdapter";
import api from "../api/api";

export async function getPokemons(type: any) {
  const newApi = api(`${import.meta.env.VITE_POKEMON_API}`);
  const response = await newApi.get(`/${type}`);

  return porkemonAdapter(response.data);
}
