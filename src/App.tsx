import React, { useState } from "react";
import "./App.css";
import useWeatherForecast from "./Helper/Hooks/useWeatherForecast";
import SwedenMap from "./Compontents/SwedenMap/SwedenMap";
import ToggleButton from "@material-ui/lab/ToggleButton";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import GpsOffIcon from "@material-ui/icons/GpsOff";
import ForecastInfo from "./Compontents/ForecastInfo/ForecastInfo";

function App() {
  const {
    forecast,
    forecastLocation,
    useCurrentLocation,
    setUseCurrentLocation,
    setLatitude,
    setLongitude
  } = useWeatherForecast(59.334591, 18.06324);

  const { forecast: norrbotten } = useWeatherForecast(66.8309, 20.3992);
  const { forecast: stockholm } = useWeatherForecast(59.334591, 18.06324);
  const { forecast: vastraGotaland } = useWeatherForecast(58.2528, 13.0596);
  const { forecast: skane } = useWeatherForecast(55.9903, 13.5958);
  const { forecast: jamtland } = useWeatherForecast(63.1712, 14.9592);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <div>
        <ToggleButton
          value="Use GPS"
          selected={useCurrentLocation}
          onChange={() => {
            setUseCurrentLocation(!useCurrentLocation);
          }}
        >
          {useCurrentLocation ? (
            <GpsFixedIcon color="primary" />
          ) : (
            <GpsOffIcon />
          )}
        </ToggleButton>
        <ForecastInfo
          forecast={forecast}
          location={forecastLocation}
          currentIndex={currentIndex}
        />
      </div>
      <SwedenMap
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setlatitude={setLatitude}
        setlongitude={setLongitude}
        forecasts={forecast}
        norrbotten={norrbotten}
        stockholm={stockholm}
        vastraGotaland={vastraGotaland}
        skane={skane}
        jamtland={jamtland}
      />
    </div>
  );
}

export default App;
