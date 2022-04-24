import React from "react";

import "../styles/supportWWICA.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

class SupportWWICA extends React.Component {
  constructor(props) {
    super(props);

    this.supportText = this.supportText.bind(this);
    this.supportForm = this.supportForm.bind(this);
    this.supportDonation = this.supportDonation.bind(this);
    this.amountAction = this.amountAction.bind(this);
    this.typeAction = this.typeAction.bind(this);
  }

  amountAction(amount) { console.log(amount)}

  typeAction() {}

  supportText() {
    return (
      <Card>
        <Card.Body>
          WWICA Islamic Centre & Masjid is in need of your help to continue its
          activities and projects that serve the whole community; so your money
          returns to you and you get the reward on top.
          <br></br> <br></br>
          Donating is easy and we provide you with a different ways to make your
          payment. Choose that which is more convenient to you.
          <br></br> <br></br>
          Jazak Allah Khairan.
        </Card.Body>
      </Card>
    );
  }

  supportHadith() {
    return (
      <Card className="support-hadith">
        <div>
          The example of those who spend their wealth in the cause of Allah is
          that of a grain that sprouts into seven ears, each bearing one hundred
          grains. And Allah multiplies the reward even more to whoever He wills.
          For Allah is All Bountiful, All Knowing.
        </div>

        <span>Al-Baqarah 2:261</span>
      </Card>
    );
  }

  supportDonation() {
    return (
      <Card>
        <Card.Body>
          <div className="support-donation">
            <div>
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="amount">
                  Donation Amount
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>this.amountAction("£10")}>£10</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.amountAction("£15")}>£15</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.amountAction("£25")}>£25</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Form.Label htmlFor="type">Type</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="type">
                  Donation Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Type</Dropdown.Item>
                  <Dropdown.Item>Another Type</Dropdown.Item>
                  <Dropdown.Item> Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="support-donation-bt">
              <Button variant="outline-success">Other ways to donate</Button>
              <Button variant="success" className="support-donation-bt-success">
                <span>Donate</span>
                <span>❤️</span>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

  supportForm() {}

  render() {
    return (
      <div className="support-wwica">
        <div className="support-group">
          <this.supportText></this.supportText>
          <this.supportHadith></this.supportHadith>
          <this.supportDonation></this.supportDonation>
        </div>
      </div>
    );
  }
}

export default SupportWWICA;
