import React from "react";
import "../styles/aboutPage.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import { whoAreWe } from "../../src/assets/texts";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
      showModal: false,
    };

    this.displayAbout = this.displayAbout.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.handleReadMoreBt = this.handleReadMoreBt.bind(this);
    this.displayAboutCards = this.displayAboutCards.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll".this.handlePageScroll);
  }

  handlePageScroll() {
    this.setState({ scrollY: window.pageYOffset });
  }

  handleReadMoreBt(isModalShown) {
    this.setState({ showModal: isModalShown });
  }

  displayModal() {
    const { showModal } = this.state;

    return (
      <Modal
        show={showModal}
        onHide={() => this.handleReadMoreBt(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>About WWICA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {whoAreWe.map((text, index) => (index > 0 ? <p>{text}</p> : null))}
        </Modal.Body>
      </Modal>
    );
  }

  displayAbout() {
    const { scrollY } = this.state;

    return (
      <div className="top-about">
        <div>
          <h4>About WWICA</h4>
          {whoAreWe.map((text, _) => (
            <p>{text}</p>
          ))}

          <br></br>
          <Button
            variant="outline-light"
            onClick={() => this.handleReadMoreBt(true)}
          >
            Read More
          </Button>
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

  displayAboutCards() {
    return (
      <div className="body-about">
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Board of Trustees
            </Card.Subtitle>
            <Card.Text>
              WWICA is governed by a board of Trustees who are currently three
              in number. The board of Trustees meet on regular bases to ensure
              that WWICA volunteers uphold the core value and ethos of WWICA.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Annual reports
            </Card.Subtitle>
            <Card.Text>
              We publish our annual reports so that you know exactly where your
              generous support has gone during the year. It is submitted to the
              charity commission on annual basis and published on their website.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Key Officers
            </Card.Subtitle>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Dr BABA M GANA </div>
                    Tel: 07977160978
                  </div>
                  <Badge bg="success" pill>
                    Chairman
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Dr Ali Zorub</div>
                    Tel: 07947079983
                  </div>
                  <Badge bg="success" pill>
                    Vice Chairman
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Br Dogan Ozyurt</div>
                    Tel: 07703 559186 <br></br>E mail: dogan_2002@hotmail.com
                  </div>
                  <Badge bg="success" pill>
                    Treasurer
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Vacancy</Card.Subtitle>
            <Card.Text>
              There are always opportunities to help in the running of the
              mosque as a volunteer. Please contact one of the key officers
              listed in the members section.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="about-page">
        <this.displayModal></this.displayModal>
        <this.displayAbout></this.displayAbout>
        <this.displayAboutCards></this.displayAboutCards>
      </div>
    );
  }
}

export default AboutPage;
