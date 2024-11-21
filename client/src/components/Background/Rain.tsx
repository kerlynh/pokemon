export function Rain() {
  return (
    <div className="absolute inset-0 flex flex-wrap overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-6 bg-blue-400/50 opacity-50 animate-rain"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
