import { useSelector } from "react-redux";

export function MobileWeather() {
  const { weather, status } = useSelector((state: any) => state.weather);
  return (
    <div className="w-14 h-14  p-2 rounded-full flex lg:hidden items-center justify-center bg-yellow-200/70 border-[2px] border-yellow-600 shadow-lg">
      <p style={{ color: "text.primary", fontSize: 18 }}>
        {Math.trunc(weather?.main?.temp)}°C
      </p>
    </div>
  );
}
