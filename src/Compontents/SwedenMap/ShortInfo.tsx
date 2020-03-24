import React, { useEffect, useState } from "react";
import { SMHIResponse } from "../../Helper/API/Types/Types";
import { WeatherSymbols } from "../../Helper/API/Types/Paramters";
import useBoundingBox from "../../Helper/Hooks/useBoundingBox";

interface Props {
  forecasts?: SMHIResponse;
  objectRect: DOMRect;
  parrentRect: DOMRect;
  currentIndex: number;
}

const ShortInfo: React.FC<Props> = ({
  forecasts,
  objectRect,
  parrentRect,
  currentIndex
}) => {
  const { ref, boundingBox } = useBoundingBox<HTMLDivElement>();
  const [topLeft, setTopLeft] = useState({ top: 0, left: 0 });
  const [pos, setPos] = useState<React.CSSProperties>({
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    alignItems: "center"
  });

  useEffect(() => {
    if (boundingBox) {
      if (pos.top !== topLeft.top || pos.left !== topLeft.left) {
        setTopLeft({
          top: objectRect.top + objectRect.height / 2 - 50 - boundingBox.height,
          left:
            objectRect.left -
            parrentRect.left +
            objectRect.width / 2 -
            10 -
            boundingBox.width / 2
        });
        setPos({ ...pos, ...topLeft });
      }
    }
  }, [
    boundingBox,
    objectRect,
    parrentRect,
    pos,
    pos.left,
    pos.top,
    topLeft,
    topLeft.left,
    topLeft.top
  ]);
  return (
    <div ref={ref} style={pos} className="shortInfo">
      <div>
        <img
          src={`/Icons/animated/${
            WeatherSymbols[
              forecasts?.timeSeries[currentIndex].parameters[18].values[0] ?? 0
            ]
          }.svg`}
          alt="Weater symbol"
        />
      </div>
      <div>{`${forecasts?.timeSeries[currentIndex].parameters[11].values[0] ??
        "Nan"} °C`}</div>
    </div>
  );
};

export default ShortInfo;
