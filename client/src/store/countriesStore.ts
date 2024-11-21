import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "../domain/service/countriesService";

export const fetchCountries = createAsyncThunk(
  import.meta.env.VITE_COUNTRIES_API,
  async () => {
    const data = await getCountries();
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    status: "idle",
    error: null,
    code: "",
    city: "",
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCode, setCity } = countriesSlice.actions;
export default countriesSlice.reducer;
