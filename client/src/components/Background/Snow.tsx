export function Snow() {
  return (
    <div className="absolute inset-0 flex flex-wrap overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-75 animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
