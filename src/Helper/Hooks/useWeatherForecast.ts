import { useEffect, useState, useCallback } from "react";
import { GetForecast, GetLocation } from "../API/Api";
import { SMHIResponse, GeocodeResponse } from "../API/Types/Types";

const useWeatherForecast = (lat: number, lon: number) => {
  const [forecast, setForecast] = useState<SMHIResponse>();
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lon);
  const [loaction, setLoaction] = useState<GeocodeResponse>();

  const GetData = useCallback(async (latitude: number, longitude: number) => {
    try {
      const smhiResponse = GetForecast(latitude, longitude);
      const geocodeResponse = GetLocation(latitude, longitude);

      const smhiData = await smhiResponse;
      const geocodeData = await geocodeResponse;
      setForecast(smhiData);
      setLoaction(geocodeData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (useCurrentLocation) {
      navigator.geolocation.getCurrentPosition(position =>
        GetData(position.coords.latitude, position.coords.longitude)
      );
    } else {
      GetData(latitude, longitude);
    }
  }, [GetData, latitude, longitude, useCurrentLocation]);

  return {
    forecast,
    forecastLocation: loaction,
    useCurrentLocation,
    setUseCurrentLocation,
    setLatitude,
    setLongitude
  };
};

export default useWeatherForecast;
