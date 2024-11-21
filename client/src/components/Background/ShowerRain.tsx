export function ShowerRain() {
  return (
    <div className="absolute inset-0 flex flex-wrap overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-8 bg-blue-400 opacity-75 animate-rain"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.5 + Math.random()}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
