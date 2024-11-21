export function getPokemonTypeByTemperature(temp) {
  const temperatureRanges = [
    { min: -Infinity, max: 5, type: "ice" },
    { min: 5, max: 10, type: "water" },
    { min: 10, max: 15, type: "grass" },
    { min: 15, max: 21, type: "ground" },
    { min: 21, max: 27, type: "bug" },
    { min: 27, max: 33, type: "rock" },
    { min: 33, max: Infinity, type: "fire" },
  ];

  const matchingRange = temperatureRanges.find(
    (range) => temp >= range.min && temp < range.max
  );

  return matchingRange ? matchingRange.type : "unknown";
}
