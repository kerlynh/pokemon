export function ScatteredClouds() {
  return (
    <div className="absolute inset-0 flex justify-center mt-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center animate-cloud"
          style={{
            left: `${i * 30}%`,
            animationDelay: `${i}s`,
          }}
        >
          <div className="relative w-48 h-20 bg-gray-400 rounded-full">
            <div className="absolute -top-8 right-8 w-20 h-20 bg-gray-400 rounded-full"></div>
            <div className="absolute -top-4 left-8 w-20 h-20 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
