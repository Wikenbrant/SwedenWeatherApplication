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
  onMouseLeave,
  setNorrbottenBoundingBox,
  setSkaneBoundingBox,
  setStockholmBoundingBox,
  setVastraGotalandBoundingBox,
  setJamtlandBoundingBox
}) => {
  return (
    <>
      <Blekinge onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Gotland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Gavleborg onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Halland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Jamtland
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        setJamtlandBoundingBox={setJamtlandBoundingBox}
      />
      <Jonkoping onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Kalmar onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Dalarna onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Kronoberg onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Norrbotten
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        setNorrbottenBoundingBox={setNorrbottenBoundingBox}
      />
      <Ostergotland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Orebro onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Sodermanland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Skane
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        setSkaneBoundingBox={setSkaneBoundingBox}
      />
      <Stockholm
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        setStockholmBoundingBox={setStockholmBoundingBox}
      />
      <Uppsala onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Vasterbotten onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <VastraGotaland
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        setVastraGotalandBoundingBox={setVastraGotalandBoundingBox}
      />
      <Varmland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Vasternorrland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Vastmanland onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
    </>
  );
};

export default Paths;
