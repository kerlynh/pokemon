export type Weather = {
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
};

export type WDescription = {
  main: string;
  description: string;
  icon: string;
};

export const weatherBackgrounds = {
  "clear sky": "bg-blue-500 transition-all duration-500",
  "few clouds": "bg-blue-300 transition-all duration-500",
  "scattered clouds": "bg-gray-300 transition-all duration-500",
  "broken clouds": "bg-gray-500 transition-all duration-500",
  "shower rain": "bg-blue-700 transition-all duration-500",
  "light rain": "bg-gray-700 transition-all duration-500",
  thunderstorm: "bg-purple-700 transition-all duration-500",
  snow: "bg-white transition-all duration-500",
  mist: "bg-gray-200 transition-all duration-500",
};
