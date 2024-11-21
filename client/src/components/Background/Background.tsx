import React, { ReactNode } from "react";
import { Sun } from "./Sun";
import { FewClouds } from "./FewClouds";
import { ScatteredClouds } from "./ScatteredClouds";
import { BrokenClouds } from "./BrokenClouds";
import { ShowerRain } from "./ShowerRain";
import { Rain } from "./Rain";
import { Thunderstorm } from "./Thunderstorm";
import { Snow } from "./Snow";
import { Mist } from "./Mist";
import { weatherBackgrounds } from "../../types/weather";

interface WeatherBackgroundProps {
  weather: string;
  children: ReactNode;
}

const WeatherBackground = ({ weather, children }: WeatherBackgroundProps) => {
  return (
    <div
      className={`relative min-h-screen w-full flex flex-col p-4 sm:p-8  space-y-4 sm:space-y-8 ${
        weatherBackgrounds[weather] || "bg-gray-100"
      }`}
    >
      {weather === "clear sky" && <Sun />}
      {weather === "few clouds" && <FewClouds />}
      {weather === "scattered clouds" && <ScatteredClouds />}
      {weather === "broken clouds" && <BrokenClouds />}
      {weather === "shower rain" && <ShowerRain />}
      {weather === "light rain" && <Rain />}
      {weather === "thunderstorm" && <Thunderstorm />}
      {weather === "snow" && <Snow />}
      {weather === "mist" && <Mist />}
      {children}
    </div>
  );
};

export default WeatherBackground;
