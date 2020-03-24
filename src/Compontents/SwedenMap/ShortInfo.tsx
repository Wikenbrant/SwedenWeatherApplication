import React, { useEffect, useState } from "react";
import { SMHIResponse } from "../../Helper/API/Types/Types";
import { WeatherSymbols } from "../../Helper/API/Types/Paramters";
import useBoundingBox from "../../Helper/Hooks/useBoundingBox";

interface Props {
  setlatitude: (newLatitude: number) => void;
  setlongitude: (newLatitude: number) => void;

  forecasts?: SMHIResponse;
  objectRect: DOMRect;
  parrentRect: DOMRect;
  currentIndex: number;
  id: string;
}

const ShortInfo: React.FC<Props> = ({
  forecasts,
  objectRect,
  parrentRect,
  currentIndex,
  id,
  setlatitude,
  setlongitude
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
          top: objectRect.top + objectRect.height / 2 - 10 - boundingBox.height,
          left: objectRect.left - parrentRect.left + objectRect.width / 2 - 40
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
    <div
      ref={ref}
      style={pos}
      onMouseOver={e => {
        const path = document.querySelector(`#${id}`);
        if (path) {
          path.classList.add("hover");
          const latitude = +path.attributes.getNamedItem("data-latitude")!
            .value;
          const longitude = +path.attributes.getNamedItem("data-longitude")!
            .value;

          setlatitude(latitude);
          setlongitude(longitude);
        }
      }}
      onMouseLeave={e => {
        const path = document.querySelector(`#${id}`);
        path?.classList.remove("hover");
      }}
    >
      <div>
        <img
          width={50}
          height={50}
          src={`/Icons/animated/${
            WeatherSymbols[
              forecasts?.timeSeries[currentIndex].parameters[18].values[0] ?? 0
            ]
          }.svg`}
          alt="Weater symbol"
        />
      </div>
      <div style={{ fontSize: 12 }}>{`${forecasts?.timeSeries[currentIndex]
        .parameters[1].values[0] ?? "Nan"}°C`}</div>
    </div>
  );
};

export default ShortInfo;
