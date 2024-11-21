export function porkemonAdapter(response: any): any {
  if (!response) throw new Error("error to get pokemons");

  const poke = response.pokemon.map((pokemon) => {
    const separeteUrl = pokemon.pokemon.url.split("/");
    const takePokemon = separeteUrl.indexOf("pokemon");
    const id = separeteUrl[takePokemon + 1];

    const imgURL = `${import.meta.env.VITE_POKEMON_IMG}/${id}.png`;

    const data = {
      id,
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url,
      image: imgURL,
    };

    return data;
  });

  return poke;
}
