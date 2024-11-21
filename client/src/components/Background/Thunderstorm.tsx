import { Rain } from "./Rain";

export function Thunderstorm() {
  return (
    <div className="absolute inset-0 bg-gray-800">
      <div className="absolute inset-0 bg-yellow-300 opacity-0 animate-flash"></div>
      <Rain />
    </div>
  );
}
