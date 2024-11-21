import { Sun } from "./Sun";

export function FewClouds() {
  return (
    <>
      <div className="absolute flex justify-center top-28 right-28 z-[2]">
        <div className="absolute w-48 h-16 bg-gray-300 rounded-full opacity-90 animate-cloud">
          <div className="absolute -top-8 right-8 w-20 h-20 bg-gray-300 rounded-full"></div>
          <div className="absolute -top-4 left-8 w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <Sun />
    </>
  );
}
