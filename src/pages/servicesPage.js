import React, { Component } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import "../styles/servicesPage.css";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayService: "all",
      displayServiceName: "exploring all services",
    };

    this.servicesMain = this.servicesMain.bind(this);
    this.servicesDropdown = this.servicesDropdown.bind(this);
    this.servicesDropdownAction = this.servicesDropdownAction.bind(this);
  }

  servicesDropdownAction(serviceName) {
    let displayServiceName;

    switch (serviceName) {
      case "madrasa":
        displayServiceName = "signing up for the Madrasa";
        break;

      case "visit":
        displayServiceName = "arranging a visit and tour";
        break;

      case "funeral":
        displayServiceName = "with the funeral service";
        break;

      case "nikah":
        displayServiceName = "getting nikah information";
        break;

      case "all":
      default:
        displayServiceName = "exploring all services";
        break;
    }

    this.setState({ displayService: serviceName, displayServiceName });
  }

  servicesDropdown() {
    const { displayServiceName } = this.state;

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
              {displayServiceName}▾
            </Dropdown.Toggle>

            <Dropdown.Menu hide>
              <Dropdown.Header
                onClick={() => this.servicesDropdownAction("all")}
              >
                WWICA Services
              </Dropdown.Header>
              <Dropdown.Item
                eventKey="2"
                onClick={() => this.servicesDropdownAction("madrasa")}
              >
                signing up for the Madrasa
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3"
                onClick={() => this.servicesDropdownAction("visit")}
              >
                arranging a visit and tour
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="4"
                onClick={() => this.servicesDropdownAction("funeral")}
              >
                with the funeral service
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="5"
                onClick={() => this.servicesDropdownAction("nikah")}
              >
                getting nikah information
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }

  servicesMain() {
    const { displayService } = this.state;

    return (
      <div className="services-main">
        <Card
          body
          className={
            displayService === "madrasa" || displayService === "all"
              ? null
              : "hidden"
          }
        >
          <Card.Subtitle className="mb-2 text-muted">
            Islamic Education - Madrasa
          </Card.Subtitle>
          <p>
            It has been a truly multi-ethnic school with children from different
            ethnic backgrounds united by quest for knowledge in our Deen in
            accordance with the Teachings of the Holy Qur’an and Sunnah of the
            Prophet Muhammad (Peace Be Upon Him). We provide a safe and
            stimulating learning environment through a team of dedicated and
            experienced staff, thus enhancing the overall intellectual, moral
            and spiritual development of our children. Our teachers and
            volunteers are CRB checked.
          </p>
          <Button variant="success" className="support-donation-bt-success">
            Find out more
          </Button>
        </Card>

        <Card
          body
          className={
            displayService === "funeral" || displayService === "all"
              ? null
              : "hidden"
          }
        >
          <Card.Subtitle className="mb-2 text-muted">
            Funeral Service
          </Card.Subtitle>
          <p>
            Please contact us in case someone near and dear passes away and we
            will provide help/ advice to make their last journey comfortable
            with respect and regards in accordance with the muslim Sharia
          </p>
        </Card>

        <Card
          body
          className={
            displayService === "visit" || displayService === "all"
              ? null
              : "hidden"
          }
        >
          <Card.Subtitle className="mb-2 text-muted">
            Visiting the WWICA Centre
          </Card.Subtitle>
          <p>
            Visits to WWICA should be booked in advance by telephone, email,
            post or in person. Preferred visit times and days are between 11.00
            am and 3.00 pm. (Mondays, Tuesday, Wednesday and Thursday only)
            Special – Friday, early morning or late evening - visits can be
            arranged on request and are subject to availability.
          </p>
          <Button variant="success" className="support-donation-bt-success">
            Find out more
          </Button>
        </Card>

        <Card
          body
          className={
            displayService === "nikah" || displayService === "all"
              ? null
              : "hidden"
          }
        >
          <Card.Subtitle className="mb-2 text-muted">
            Nikah Information
          </Card.Subtitle>
          <p>
            Marriage Solemnisation Family life is the building block of a
            successful society, and marriage is an occasion of great joy in the
            Muslim community. West Wales Islamic Cultural Center facilitates the
            solemnisation of an Islamic contract of marriage. The newly-married
            couple is provided with an official 'Nikah' certificate to show they
            have been married according to Islamic Law.
          </p>
        </Card>
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
