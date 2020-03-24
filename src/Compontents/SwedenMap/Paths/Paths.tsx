import React from "react";
import Blekinge from "./Countys/Blekinge";
import Gotland from "./Countys/Gotland";
import Gavleborg from "./Countys/Gavleborg";
import Halland from "./Countys/Halland";
import Jamtland from "./Countys/Jamtland";
import Jonkoping from "./Countys/Jonkoping";
import Kalmar from "./Countys/Kalmar";
import Dalarna from "./Countys/Dalarna";
import Kronoberg from "./Countys/Kronoberg";
import Norrbotten from "./Countys/Norrbotten";
import Ostergotland from "./Countys/Ostergotland";
import Orebro from "./Countys/Orebro";
import Sodermanland from "./Countys/Sodermanland";
import Skane from "./Countys/Skane";
import Stockholm from "./Countys/Stockholm";
import Uppsala from "./Countys/Uppsala";
import Vasterbotten from "./Countys/Vasterbotten";
import VastraGotaland from "./Countys/VastraGotaland";
import Vasternorrland from "./Countys/Vasternorrland";
import Varmland from "./Countys/Varmland";
import Vastmanland from "./Countys/Vastmanland";

interface Props extends React.SVGProps<SVGPathElement> {
  setNorrbottenBoundingBox: (obj: DOMRect) => void;
  setStockholmBoundingBox: (obj: DOMRect) => void;
  setVastraGotalandBoundingBox: (obj: DOMRect) => void;
  setSkaneBoundingBox: (obj: DOMRect) => void;
  setJamtlandBoundingBox: (obj: DOMRect) => void;
}

const Paths: React.FC<Props> = ({
  onMouseOver,
  setNorrbottenBoundingBox,
  setSkaneBoundingBox,
  setStockholmBoundingBox,
  setVastraGotalandBoundingBox,
  setJamtlandBoundingBox
}) => {
  return (
    <>
      <Blekinge onMouseOver={onMouseOver} />
      <Gotland onMouseOver={onMouseOver} />
      <Gavleborg onMouseOver={onMouseOver} />
      <Halland onMouseOver={onMouseOver} />
      <Jamtland
        onMouseOver={onMouseOver}
        setJamtlandBoundingBox={setJamtlandBoundingBox}
      />
      <Jonkoping onMouseOver={onMouseOver} />
      <Kalmar onMouseOver={onMouseOver} />
      <Dalarna onMouseOver={onMouseOver} />
      <Kronoberg onMouseOver={onMouseOver} />
      <Norrbotten
        onMouseOver={onMouseOver}
        setNorrbottenBoundingBox={setNorrbottenBoundingBox}
      />
      <Ostergotland onMouseOver={onMouseOver} />
      <Orebro onMouseOver={onMouseOver} />
      <Sodermanland onMouseOver={onMouseOver} />
      <Skane
        onMouseOver={onMouseOver}
        setSkaneBoundingBox={setSkaneBoundingBox}
      />
      <Stockholm
        onMouseOver={onMouseOver}
        setStockholmBoundingBox={setStockholmBoundingBox}
      />
      <Uppsala onMouseOver={onMouseOver} />
      <Vasterbotten onMouseOver={onMouseOver} />
      <VastraGotaland
        onMouseOver={onMouseOver}
        setVastraGotalandBoundingBox={setVastraGotalandBoundingBox}
      />
      <Varmland onMouseOver={onMouseOver} />
      <Vasternorrland onMouseOver={onMouseOver} />
      <Vastmanland onMouseOver={onMouseOver} />
    </>
  );
};

export default Paths;
