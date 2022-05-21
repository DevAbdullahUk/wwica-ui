import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "../styles/servicesPage.css";

class Services extends Component {
  constructor(props) {
    super(props);

    this.servicesMain = this.servicesMain.bind(this);
    this.servicesDropdown = this.servicesDropdown.bind(this);
  }

  // servicesMain() {
  //   return (
  //     <div className="services-main">
  //       <div className="mb-2 text-muted card-subtitle h6"> Our Services </div>
  //       <p>
  //         We aim to work for advancement of the Islamic religion in accordance
  //         with the teachings of the Holy Quran and Sunnah of the Prophet
  //         Muhammad (peace be upon him) in West Wales region.
  //       </p>
  //     </div>
  //   );
  // }

  servicesDropdown() {
    return (
      <div className="services-dropdown">
        <div>WHAT CAN WE HELP YOU WITH?</div>

        <div>
          <div>I need help with </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="Info"
              id="dropdown-basic"
              className="services-dropdown-bt"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu hide>
              <Dropdown.Header>WWICA Services</Dropdown.Header>
              <Dropdown.Item eventKey="2">
                signing up for the Madrasa
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                arranging a visit and tour
              </Dropdown.Item>
              <Dropdown.Item eventKey="4">
                with the funeral service
              </Dropdown.Item>
              <Dropdown.Item eventKey="5">
                getting nikah information
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }


  servicesMain() {
    return (
      <div className="services-main">
        <div className="mb-2 text-muted card-subtitle h6"> Our Services </div>
        <p>
          We aim to work for advancement of the Islamic religion in accordance
          with the teachings of the Holy Quran and Sunnah of the Prophet
          Muhammad (peace be upon him) in West Wales region.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="services-body">
        <this.servicesDropdown></this.servicesDropdown>
        <this.servicesMain></this.servicesMain>
      </div>
    );
  }
}

export default Services;
