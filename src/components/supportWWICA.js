import React from "react";

import "../styles/supportWWICA.css";
import Card from "react-bootstrap/Card";

class SupportWWICA extends React.Component {
  constructor(props) {
    super(props);

    this.supportText = this.supportText.bind(this);
    this.supportForm = this.supportForm.bind(this);
    this.supporDonation = this.supporDonation.bind(this);
  }

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

  supporDonation() {
    <Card></Card>;
  }

  supportForm() {}

  render() {
    return (
      <div className="support-wwica">
        <div className="support-group">
          {/* <this.supportText></this.supportText>
          <this.supportHadith></this.supportHadith> */}
        </div>
      </div>
    );
  }
}

export default SupportWWICA;
