import React from "react";

import Card from "react-bootstrap/Card";

import "../styles/newsFeed.css";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.onlyTestCarDisplay = this.onlyTestCarDisplay.bind(this);
  }

  onlyTestCarDisplay() {
    return (
        <div className="news-card">
      <Card >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card> 

    
      </div>
    );
  }

  render() {
    return (

    <div class="scrolling-wrapper">


      <this.onlyTestCarDisplay></this.onlyTestCarDisplay>
           <this.onlyTestCarDisplay></this.onlyTestCarDisplay>
           <this.onlyTestCarDisplay></this.onlyTestCarDisplay>

          <this.onlyTestCarDisplay></this.onlyTestCarDisplay>
           <this.onlyTestCarDisplay></this.onlyTestCarDisplay>
           <this.onlyTestCarDisplay></this.onlyTestCarDisplay>


</div>
    );
  }
}

export default NewsFeed;
