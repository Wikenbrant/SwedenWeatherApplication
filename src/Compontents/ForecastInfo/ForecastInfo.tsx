import React from "react";
import { SMHIResponse, GeocodeResponse } from "../../Helper/API/Types/Types";
import "./ForecastInfo.css";
import { WeatherSymbols } from "../../Helper/API/Types/Paramters";

interface Props {
  forecast?: SMHIResponse;
  location?: GeocodeResponse;
  currentIndex: number;
}

const ForecastInfo: React.FC<Props> = ({
  forecast,
  location,
  currentIndex
}) => {
  const headerText =
    location?.region.split(", ")[1] ??
    location?.region.split(", ")[0] ??
    "...Loading";
  const text = `${forecast?.timeSeries[currentIndex].parameters[11].values[0]} °C`;

  return (
    <div className="infoContainer">
      <div className="infoHeader">
        <h5>{headerText}</h5>
      </div>
      <div className="info left">
        <img
          src={`/Icons/animated/${
            WeatherSymbols[
              forecast?.timeSeries[currentIndex].parameters[18].values[0] ?? 0
            ]
          }.svg`}
          alt="Weater symbol"
        />
      </div>
      <div className="info right">{text}</div>
    </div>
  );
};

export default ForecastInfo;
