import { useEffect, useState } from "react";
import { getCurrentLocation } from "../domain/service/weatherService";

export function useCurrentLocation() {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  function onSuccess(postion: Record<string, any>) {
    setLocation(postion.coords);
  }

  function onError() {
    console.log("Unable to retrieve your location");
  }

  return { location };
}
