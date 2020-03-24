import React, { useState } from "react";
import "./SwedenMap.css";
import Paths from "./Paths/Paths";
import { SMHIResponse } from "../../Helper/API/Types/Types";
import ShortInfo from "./ShortInfo";
import useBoundingBox from "../../Helper/Hooks/useBoundingBox";

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
  currentIndex
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
    event.currentTarget.classList.toggle("hover");
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
    <div ref={ref} style={{ position: "relative" }}>
      <svg viewBox="0 0 345.62482 792.52374" className="swedenMap">
        <Paths
          onMouseOver={handleHover}
          onMouseLeave={e => e.currentTarget.classList.toggle("hover")}
          setNorrbottenBoundingBox={setNorrbottenBoundingBox}
          setStockholmBoundingBox={setStockholmBoundingBox}
          setVastraGotalandBoundingBox={setVastraGotalandBoundingBox}
          setSkaneBoundingBox={setSkaneBoundingBox}
          setJamtlandBoundingBox={setJamtlandBoundingBox}
        />
      </svg>

      <ShortInfo
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        currentIndex={currentIndex}
        forecasts={norrbotten}
        objectRect={norrbottenBoundingBox}
        parrentRect={boundingBox}
        id={"SE-BD"}
      />
      <ShortInfo
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        currentIndex={currentIndex}
        forecasts={jamtland}
        objectRect={jamtlandBoundingBox}
        parrentRect={boundingBox}
        id={"SE-Z"}
      />
      <ShortInfo
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        currentIndex={currentIndex}
        forecasts={stockholm}
        objectRect={stockholmBoundingBox}
        parrentRect={boundingBox}
        id={"SE-AB"}
      />
      <ShortInfo
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        currentIndex={currentIndex}
        forecasts={vastraGotaland}
        objectRect={vastraGotalandBoundingBox}
        parrentRect={boundingBox}
        id={"SE-O"}
      />
      <ShortInfo
        setlatitude={setlatitude}
        setlongitude={setlongitude}
        currentIndex={currentIndex}
        forecasts={skane}
        objectRect={skaneBoundingBox}
        parrentRect={boundingBox}
        id={"SE-M"}
      />
    </div>
  );
};

export default SwedenMap;
