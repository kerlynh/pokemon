export function Sun() {
  return (
    <div className="absolute inset-0 flex justify-end items-start mt-7 mr-10">
      <div className="flex items-center justify-center">
        <div className="w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute w-36 h-36 border-8 border-dashed border-yellow-300 rounded-full "></div>
      </div>
    </div>
  );
}
