import React from "react";
import SectionLink from "../SectionLink";
import Hamburger from "../Hamburger/Hamburger";
import { SvgIcon } from "../Svg";
import styles from "./Menu.module.css";
import SbEditable from "storyblok-react";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeSection: 0,
      isScrollingAfterClick: false,
    };
  }

  enableMenuOnLargeDevices = () => {
    //default lg breakpoint
    if (window.innerWidth > 1024) {
      this.isOpen = this.setState({ isOpen: true });
    }
  };

  toggleMenu = (event) => {
    this.setState({ isOpen: event.target.checked });
  };

  changeActiveSection = (newSection) => {
    this.setState({ activeSection: newSection });
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.enableMenuOnLargeDevices();
      window.addEventListener("resize", this.enableMenuOnLargeDevices);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.enableMenuOnLargeDevices);
    }
  }

  setScrolling = (newValue) => {
    this.setState({ isScrollingAfterClick: newValue });
  };

  scrollToElement = (section) => {
    const element = document.getElementById(section.href.substring(2));
    element.scrollIntoView({ behavior: "smooth" });

    if (this.props.blok.link[this.state.activeSection].href !== section.href) {
      this.setScrolling(true);
    }
  };

  render() {
    const offset = {
      top: 55 + this.state.activeSection * 44,
    };

    return (
      <SbEditable content={this.props.blok}>
        <header>
          <Hamburger isOpen={this.state.isOpen} onChange={this.toggleMenu} />

          <nav
            className={`${styles.menu} ${
              this.state.isOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}>
            <ul id={styles.menuLinkList}>
              {this.props.blok.link.map((section, index) => (
                <li key={section.title}>
                  <SectionLink
                    isScrolling={this.state.isScrollingAfterClick}
                    isActive={index === this.state.activeSection}
                    section={section}
                    triggerActive={() => this.changeActiveSection(index)}
                    onClick={() => {
                      this.changeActiveSection(index);
                      this.scrollToElement(section);
                    }}
                    resetScrolling={() => this.setScrolling(false)}
                  />
                </li>
              ))}
            </ul>

            <div id={styles.activeSectionIndicator} style={offset} />

            <div id={styles.socialMediaLinkList}>
              {this.props.blok.socialLink.map((socialMedium) => (
                <a
                  className='block'
                  key={socialMedium._uid}
                  href={socialMedium.href}
                  rel='nofollow noreferrer noopener'>
                  <SvgIcon icon={socialMedium.icon} />
                </a>
              ))}
            </div>
          </nav>
        </header>
      </SbEditable>
    );
  }
}

export default Menu;
