import { useEffect } from "react";
import { AutoComplete } from "./components/Autocomplete";
import { InputField } from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentLocation, fetchWeather } from "./store/weatherStore";
import { AppDispatch } from "./store/store";
import { CardWeather } from "./components/CardWeather";
import pokemonLogo from "./assets/pokemon_logo.png";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
import WeatherBackground from "./components/Background/Background";
import { getPokemonTypeByTemperature } from "./utils/weather";
import { fetchPokemons } from "./store/pokemonStore";
import { MobileWeather } from "./components/Background/MobileWeather";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { city, code } = useSelector((state: any) => state.countries);
  const { location } = useCurrentLocation();
  const { weather } = useSelector((state: any) => state.weather);
  const { pokemons } = useSelector((state: any) => state.pokemons);

  useEffect(() => {
    if (city && code) {
      dispatch(fetchWeather(`${city},${code}`));
    } else {
      if (
        !city &&
        !code &&
        navigator.geolocation &&
        location.latitude &&
        location.longitude
      ) {
        dispatch(fetchCurrentLocation(location));
      }
    }
  }, [city, code, location]);

  useEffect(() => {
    if (Object.keys(weather).length > 0) {
      const type = getPokemonTypeByTemperature(weather.main?.temp);
      dispatch(fetchPokemons(type));
    }
  }, [weather]);

  return (
    <WeatherBackground weather={weather.weather?.description}>
      <header className="relative">
        <MobileWeather />
        <div className="space-y-4">
          <div className="w-full h-auto flex justify-center">
            <img src={pokemonLogo} alt="Pokémon Logo" loading="eager" />
          </div>
          <div className="w-full h-auto flex justify-center space-x-3">
            <AutoComplete />
            <InputField />
          </div>
        </div>
        <CardWeather />
      </header>
      <main className="relative w-h-full w-full flex flex-col justify-center ">
        <div className="relative w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center overflow-hidden gap-5">
          {pokemons.map((pokemon, idx) => (
            <div
              key={idx}
              className="w-auto h-40 flex rounded-lg p-2 justify-between items-center border border-gray-200 shadow-md backdrop-blur-sm bg-white/70"
            >
              <div>
                <p>{pokemon.name}</p>
              </div>
              <div className="w-36 h-auto">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </WeatherBackground>
  );
}

export default App;
