import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../domain/service/pokemonService";

export const fetchPokemons = createAsyncThunk(
  "get/pokemons",
  async (type: string) => {
    const data = await getPokemons(type);
    return data;
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { setCode, setCity } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
