import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./countriesStore";
import weatherSlice from "./weatherStore";
import pokemonsSlice from "./pokemonStore";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    weather: weatherSlice,
    pokemons: pokemonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
