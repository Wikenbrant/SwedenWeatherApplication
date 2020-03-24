import React, { useState } from "react";
import "./SwedenMap.css";
import Paths from "./Paths/Paths";
import { SMHIResponse } from "../../Helper/API/Types/Types";
import ShortInfo from "./ShortInfo";
import useBoundingBox from "../../Helper/Hooks/useBoundingBox";
import Playbar from "../Playbar/Playbar";

interface Props {
  setlatitude: (newLatitude: number) => void;
  setlongitude: (newLatitude: number) => void;
  forecasts?: SMHIResponse;
  norrbotten?: SMHIResponse;
  stockholm?: SMHIResponse;
  vastraGotaland?: SMHIResponse;
  skane?: SMHIResponse;
  jamtland?: SMHIResponse;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SwedenMap: React.FC<Props> = ({
  setlatitude,
  setlongitude,
  forecasts,
  norrbotten,
  stockholm,
  vastraGotaland,
  skane,
  jamtland,
  currentIndex,
  setCurrentIndex
}) => {
  const handleHover = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const latitude = +event.currentTarget.attributes.getNamedItem(
      "data-latitude"
    )!.value;
    const longitude = +event.currentTarget.attributes.getNamedItem(
      "data-longitude"
    )!.value;

    setlatitude(latitude);
    setlongitude(longitude);
  };

  const [norrbottenBoundingBox, setNorrbottenBoundingBox] = useState(
    new DOMRect()
  );
  const [stockholmBoundingBox, setStockholmBoundingBox] = useState(
    new DOMRect()
  );
  const [vastraGotalandBoundingBox, setVastraGotalandBoundingBox] = useState(
    new DOMRect()
  );
  const [skaneBoundingBox, setSkaneBoundingBox] = useState(new DOMRect());
  const [jamtlandBoundingBox, setJamtlandBoundingBox] = useState(new DOMRect());

  const { ref, boundingBox } = useBoundingBox<HTMLDivElement>();

  return (
    <div className="mapContainer" ref={ref}>
      <svg viewBox="0 0 345.62482 792.52374" className="swedenMap">
        <Paths
          onMouseOver={handleHover}
          setNorrbottenBoundingBox={setNorrbottenBoundingBox}
          setStockholmBoundingBox={setStockholmBoundingBox}
          setVastraGotalandBoundingBox={setVastraGotalandBoundingBox}
          setSkaneBoundingBox={setSkaneBoundingBox}
          setJamtlandBoundingBox={setJamtlandBoundingBox}
        />
      </svg>

      <ShortInfo
        currentIndex={currentIndex}
        forecasts={norrbotten}
        objectRect={norrbottenBoundingBox}
        parrentRect={boundingBox}
      />
      <ShortInfo
        currentIndex={currentIndex}
        forecasts={jamtland}
        objectRect={jamtlandBoundingBox}
        parrentRect={boundingBox}
      />
      <ShortInfo
        currentIndex={currentIndex}
        forecasts={stockholm}
        objectRect={stockholmBoundingBox}
        parrentRect={boundingBox}
      />
      <ShortInfo
        currentIndex={currentIndex}
        forecasts={vastraGotaland}
        objectRect={vastraGotalandBoundingBox}
        parrentRect={boundingBox}
      />
      <ShortInfo
        currentIndex={currentIndex}
        forecasts={skane}
        objectRect={skaneBoundingBox}
        parrentRect={boundingBox}
      />
      {forecasts ? (
        <Playbar forecasts={forecasts} setCurrentIndex={setCurrentIndex} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SwedenMap;
