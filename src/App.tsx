import React, { useState } from "react";
import useWeatherForecast from "./Helper/Hooks/useWeatherForecast";
import SwedenMap from "./Compontents/SwedenMap/SwedenMap";
import Playbar from "./Compontents/Playbar/Playbar";
import { Grid } from "@material-ui/core";
import ForecastInfo from "./Compontents/ForecastInfo/ForecastInfo";

function App() {
  const {
    forecast: forecasts,
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
    <Grid
      container
      style={{ padding: 40 }}
      direction="column"
      alignContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid
          container
          spacing={5}
          direction="row"
          alignContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            {forecasts ? (
              <ForecastInfo
                setlatitude={setLatitude}
                setlongitude={setLongitude}
                forecast={forecasts}
                location={forecastLocation}
                setUseCurrentLocation={setUseCurrentLocation}
                useCurrentLocation={useCurrentLocation}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs={12}>
                <SwedenMap
                  currentIndex={currentIndex}
                  setlatitude={setLatitude}
                  setlongitude={setLongitude}
                  forecasts={forecasts}
                  norrbotten={norrbotten}
                  stockholm={stockholm}
                  vastraGotaland={vastraGotaland}
                  skane={skane}
                  jamtland={jamtland}
                />
              </Grid>
              <Grid item xs={12}>
                {forecasts ? (
                  <Playbar
                    forecasts={forecasts}
                    setCurrentIndex={setCurrentIndex}
                  />
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default App;
