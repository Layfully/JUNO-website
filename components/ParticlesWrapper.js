import Particles from "react-particles-js";
import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const ParticlesWrapper = (props) => {
  return (
    <Particles
      canvasClassName='bg-black fixed pointer-events-none -z-1 top-0 left-0'
      width={useWindowSize(false).width}
      height={useWindowSize(false).height}
    />
  );
};

export default ParticlesWrapper;
