import React, { useEffect } from "react";
import { SMHIResponse, GeocodeResponse } from "../../Helper/API/Types/Types";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Grid
} from "@material-ui/core";
import { useStyles } from "../../Helper/Hooks/useStyles ";

import ToggleButton from "@material-ui/lab/ToggleButton";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import GpsOffIcon from "@material-ui/icons/GpsOff";
import useDisplayWeather from "../../Helper/Hooks/useDisplayWeather";
import SearchField from "../SearchField/SearchField";

interface Props {
  forecast: SMHIResponse;
  location?: GeocodeResponse;
  useCurrentLocation: boolean;
  setUseCurrentLocation: React.Dispatch<React.SetStateAction<boolean>>;
  setlatitude: (newLatitude: number) => void;
  setlongitude: (newLatitude: number) => void;
}

const ForecastInfo: React.FC<Props> = ({
  forecast,
  location,
  useCurrentLocation,
  setUseCurrentLocation,
  setlatitude,
  setlongitude
}) => {
  const {
    weather: todaysWeather,
    setForecast: setTodaysForecast
  } = useDisplayWeather(0, forecast);
  const {
    weather: tomorrowWeather,
    setForecast: setTomorrowForecast
  } = useDisplayWeather(1, forecast);

  const {
    weather: dayAfterTomorrowWeather,
    setForecast: setDayAfterTomorrowForecast
  } = useDisplayWeather(2, forecast);
  const classes = useStyles();

  useEffect(() => {
    if (forecast) {
      setTodaysForecast(forecast);
      setTomorrowForecast(forecast);
      setDayAfterTomorrowForecast(forecast);
    }
  }, [
    forecast,
    setDayAfterTomorrowForecast,
    setTodaysForecast,
    setTomorrowForecast
  ]);

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <ToggleButton
                value={useCurrentLocation}
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
            </TableCell>
            <TableCell colSpan={1}>
              <h2>
                {location?.region.split(", ")[1] ??
                  location?.region.split(", ")[0] ??
                  "...Loading"}
              </h2>
            </TableCell>
            <TableCell colSpan={2}>
              <SearchField
                setlatitude={setlatitude}
                setlongitude={setlongitude}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="center">Weather</TableCell>
            <TableCell align="right">Precipitation</TableCell>
            <TableCell align="right">Wind</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[todaysWeather, tomorrowWeather, dayAfterTomorrowWeather].map(
            (weather, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {weather.date}
                </TableCell>
                <TableCell align="right">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <img src={weather.weatherSymbolUrl} alt="WeatherSymbol" />
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          {weather.maxTemp}
                        </Grid>
                        <Grid item xs={12}>
                          {weather.minTemp}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">{weather.precipitation}</TableCell>
                <TableCell align="right">{weather.windSpeed}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ForecastInfo;
