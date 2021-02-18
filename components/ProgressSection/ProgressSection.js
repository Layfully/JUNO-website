import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import styles from "./ProgressSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import Text from "../Text";

class ProgressSection extends React.Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      milestones: [
        "Introduction of the particle world (1. Chapter)",
        "Party at Beryllium mansion (3. Chapter)",
        "VR-realization of the detectors at SLAC and BNL",
        "Visualization of Data-Acquisition at BNL",
        "Design of the control-room at SLAC",
        "Combining everything to the final project",
        "App development and project release",
      ],
    };
  }

  render() {
    return (
      <section id='Progress' className={sectionStyles.section}>
        <ol className={styles.progressBar}>
          {this.state.milestones.map((item, index) => (
            <div
              className={`${styles.elementWrapper} ${
                index <= this.props.step ? styles.elementWrapperActive : ""
              }`}
              key={index}>
              <li className={styles.element}>
                <Fade bottom>
                  <div className={styles.elementBox}>
                    <Text color='true-orange' custom='text-center'>
                      {item}
                    </Text>
                  </div>
                </Fade>
              </li>
            </div>
          ))}
        </ol>
      </section>
    );
  }
}

export default ProgressSection;
