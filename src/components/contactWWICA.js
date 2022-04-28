import React from "react";
import "../styles/connectWWICA.css";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class ConnectWWICA extends React.Component {
  constructor(props) {
    super(props);

    this.displayContactUs = this.displayContactUs.bind(this);
    this.displayContactUsInfo = this.displayContactUsInfo.bind(this);
  }

  displayContactUsInfo() {
    return (
      <div className="display-contact-info-top">
        <p>
          Please contact us with any queries. The Masjid will be open 30 mins
          before and after each Salah
        </p>

        <div>
          <span>Address</span> <br></br>
          West Wales Islamic Cultural Association, <br></br>
          131 Priory Street, <br></br>
          Carmarthen, <br></br>
          SA31 1LR, <br></br>
          Wales, UK
        </div>

        <div>
          <span>Email</span> <br></br>
          enquiries@wwica.co.uk
        </div>

        <div>
          <span>Centre phone number</span> <br></br>
          01267 232661
        </div>
      </div>
    );
  }

  displayContactUs() {
    return (
      <Card className="display-contact-card">
        <Card.Body>
          <div className="display-contact-top">
            <div>
              <Form.Label htmlFor="type">Your Name</Form.Label>
              <FormControl aria-label="Enter your name" />
              <br></br>

              <Form.Label htmlFor="type">Email Address</Form.Label>
              <FormControl aria-label="Enter your email" />
            </div>

            <div>
              <Form.Label htmlFor="type">Subject</Form.Label>
              <FormControl aria-label="The subject" />
              <br></br>

              <Form.Label htmlFor="type">Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </div>
          </div>

          <br></br>
          <div className="display-contact-button">
            <Form.Check
              type="checkbox"
              label="I agree to this Terms & Conditions and Privacy Policy"
            />

            <Button variant="success" className="support-donation-bt-success">
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <div>
        <h5 className="layout-title">Connect Us</h5>
        <div className="connect-wwica-group">
          <this.displayContactUs></this.displayContactUs>
          <this.displayContactUsInfo></this.displayContactUsInfo>
        </div>
      </div>
    );
  }
}

export default ConnectWWICA;
