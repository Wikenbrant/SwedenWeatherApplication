import React, { useState, useEffect } from "react";
import { Slider } from "@material-ui/core";
import { useStyles } from "../../Helper/Hooks/useStyles ";
import { SMHIResponse, Days } from "../../Helper/API/Types/Types";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

interface Props {
  forecasts: SMHIResponse;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Playbar: React.FC<Props> = ({ forecasts, setCurrentIndex }) => {
  const [value, setValue] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [marks, setMarks] = useState<{ value: number }[]>([]);
  const [forecast, setForecast] = useState(forecasts.timeSeries[0]);

  useEffect(() => {
    setMarks(
      forecasts.timeSeries.map((_, index) => {
        return { value: index };
      })
    );
  }, [forecasts]);

  useEffect(() => {
    setForecast(forecasts.timeSeries[value]);
  }, [forecasts, value]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        value >= forecasts.timeSeries.length - 1
          ? setValue(0)
          : setValue(value + 1);
        setCurrentIndex(value);
      }
    }, 750);

    return () => clearInterval(interval);
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>
        {`${Days[new Date(forecast.validTime).getDay()]} ${new Date(
          forecast.validTime
        ).getHours()}:${new Date(forecast.validTime).getMinutes()}0`}
      </p>
      <div>
        <div>
          {isPlaying ? (
            <PauseIcon
              color="primary"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <PlayArrowIcon
              color="primary"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <Slider
          value={value}
          onChange={(e, newValue) => setValue(newValue as number)}
          valueLabelDisplay="off"
          step={1}
          min={1}
          max={marks.length - 1}
        />
      </div>
    </div>
  );
};

export default Playbar;
