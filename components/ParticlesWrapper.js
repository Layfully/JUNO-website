import Particles from "react-particles-js";
import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const ParticlesWrapper = (props) => {
  return (
    <Particles
      canvasClassName='bg-black fixed -z-1'
      width={useWindowSize().width}
      height={useWindowSize().height}
    />
  );
};

export default ParticlesWrapper;
