import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentLocation,
  getLocalWeather,
} from "../domain/service/weatherService";

export const fetchWeather = createAsyncThunk(
  "get/weather",
  async (local: string) => {
    const data = await getLocalWeather(local);
    return data;
  }
);

export const fetchCurrentLocation = createAsyncThunk(
  "get/currentLocation",
  async (position: Record<string, any>) => {
    const data = await getCurrentLocation(position);
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get weather with location
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //update weather with currentLocation
      .addCase(fetchCurrentLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(fetchCurrentLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { setCode, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
