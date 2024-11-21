/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_IMG: string;
  readonly VITE_OPENWEATHER_API: string;
  readonly VITE_OPENWEATHER_TOKEN: string;
  readonly VITE_COUNTRIES_API: string;
  readonly VITE_POKEMON_API: string;
  readonly VITE_POKEMON_IMG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
