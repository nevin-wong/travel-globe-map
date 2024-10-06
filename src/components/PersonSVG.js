import React from "react";
import janetSvg from "../svgs/janet.svg";
import aliceSvg from "../svgs/alice.svg";
import nevinSvg from "../svgs/nevin.svg";
import graceSvg from "../svgs/grace.svg";
import lilySvg from "../svgs/lily.svg";
import wadeSvg from "../svgs/wade.svg";
import sophiaSvg from "../svgs/sophia.svg";
import zoeSvg from "../svgs/zoe.svg";

const svgMap = {
  1: janetSvg,
  2: aliceSvg,
  3: nevinSvg,
  4: graceSvg,
  5: lilySvg,
  6: wadeSvg,
  7: sophiaSvg,
  8: zoeSvg,
};

const PersonSVG = ({ id }) => {
  const svgSrc = svgMap[id];
  return (
    <img
      className="person-icon"
      src={svgSrc}
      alt={`Icon`}
      width="50"
      height="50"
    />
  );
};

export default PersonSVG;
