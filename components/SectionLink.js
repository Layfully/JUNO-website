import React from "react";
import Link from "next/link";
import Text from "./Text";

class SectionLink extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const element = document.getElementById(
      this.props.section.href.substring(2)
    );
    const observer = new IntersectionObserver(this.trackScrolling, {
      rootMargin: "0px 64px 0px 16px",
      threshold: 0.2,
    });

    if (element != null) {
      observer.observe(element);
    }
  }

  trackScrolling = (entries) => {
    if (!this.props.isActive && !this.props.isScrolling) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.props.triggerActive();
        }
      });
    } else if (this.props.isActive) {
      this.props.resetScrolling();
    }
  };

  render() {
    const style = this.props.isActive ? "text-opacity-100" : "text-opacity-50";

    return (
      <Text custom={style} hover='hover:text-opacity-80'>
        <Link href={this.props.section.href}>
          <a onClick={this.props.onClick}>{this.props.section.title}</a>
        </Link>
      </Text>
    );
  }
}

export default SectionLink;
