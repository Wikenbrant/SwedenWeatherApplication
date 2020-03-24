import { WeatherSymbols } from "../API/Types/Paramters";
import { useState, useEffect } from "react";
import { SMHIResponse, Months } from "../API/Types/Types";

const useDisplayWeather = (
  plusNumberOfDaysFromToday: number,
  initForecast: SMHIResponse
) => {
  const [weather, setWeather] = useState<ForecastDisplayRow>(
    {} as ForecastDisplayRow
  );
  const [forecast, setForecast] = useState(initForecast);

  useEffect(() => {
    if (forecast) {
      const date = new Date();
      date.setDate(date.getDate() + plusNumberOfDaysFromToday);
      const forcasts = forecast.timeSeries.filter(
        item => new Date(item.validTime).getDate() === date.getDate()
      );
      const temps = forcasts.map(item => item.parameters[1].values[0]);
      const precipitationArray = forcasts.map(
        item => item.parameters[16].values[0]
      );
      let precipitation = precipitationArray.reduce(
        (previous, current) => (current += previous)
      );
      precipitation /= precipitationArray.length;

      const windSpeedArray = forcasts.map(
        item => item.parameters[14].values[0]
      );
      let windSpeed = windSpeedArray.reduce(
        (previous, current) => (current += previous)
      );
      windSpeed /= windSpeedArray.length;

      setWeather({
        date: `${date.getDate()} ${Months[date.getMonth()]}`,
        minTemp: `${Math.min(...temps)}°C`,
        maxTemp: `${Math.max(...temps)}°C`,
        precipitation: `${precipitation.toFixed(1)} mm`,
        windSpeed: `${Math.abs(windSpeed).toFixed(1)} m/s`,
        weatherSymbolUrl: `/Icons/animated/${
          WeatherSymbols[forcasts[0].parameters[18].values[0] ?? 0]
        }.svg`
      });
    }
  }, [forecast, plusNumberOfDaysFromToday]);
  return { weather, setForecast };
};

export default useDisplayWeather;

export interface ForecastDisplayRow {
  date: string;
  minTemp: string;
  maxTemp: string;
  precipitation: string;
  windSpeed: string;
  weatherSymbolUrl: string;
}
