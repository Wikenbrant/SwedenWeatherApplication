import { useRef, useState, useEffect } from "react";

const useBoundingBox = <T extends HTMLDivElement | SVGPathElement>() => {
  const ref = useRef<T>(null);
  const [boundingBox, setBoundingBox] = useState(new DOMRect());

  useEffect(() => {
    if (ref.current) {
      setBoundingBox(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return { ref, boundingBox };
};

export default useBoundingBox;
