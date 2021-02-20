import Particles from "react-particles-js";
import React from "react";

class ParticlesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
  }

  componentDidMount() {
    this.setCanvasSize();
    window.addEventListener("resize", this.setCanvasSize);
  }

  setCanvasSize = () => {
    if (typeof window !== "undefined") {
      this.setState({ height: window.outerHeight + 200 });
      this.setState({ width: window.outerWidth });
    }
  };

  render() {
    return (
      <Particles
        canvasClassName='bg-black fixed pointer-events-none -z-1 top-0 left-0'
        height={this.state.height}
        width={this.state.width}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
          },
          interactivity: {
            events: {
              resize: false,
            },
          },
        }}
      />
    );
  }
}

export default ParticlesWrapper;
