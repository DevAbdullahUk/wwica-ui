import React from "react";
import "../styles/aboutPage.css";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };

    this.displayAbout = this.displayAbout.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll".this.handlePageScroll);
  }

  handlePageScroll(e) {
    this.setState({ scrollY: window.pageYOffset });
  }

  displayAbout() {
    const { scrollY } = this.state;

    return (
      <div className="top-about">
        <div>
          <h4>her is some text</h4>
          <p>some information about wwice etc</p>
        </div>
        <div
          className="mosque-back"
          style={{ transform: `translateX(${scrollY * -0.06}px)` }}
        >
          <div
            className="mosque-front"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          ></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="about-page">
        <this.displayAbout></this.displayAbout>
      </div>
    );
  }
}

export default AboutPage;
