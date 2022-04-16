import React from "react";

import Card from "react-bootstrap/Card";

import "../styles/newsFeed.css";
import {news} from "../assets/news"

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.newsCarDisplay = this.newsCarDisplay.bind(this);
  }

  newsCarDisplay(props) {
    const {title, date, description, image} = props.news;

    console.log(image)
    return (
      <div className="news-card">
        <Card>
            {
                image ?
                <img class="card-img-top" src={image} alt="Card image cap"/>
                :
                null 
            }
       

          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
             {date}
            </Card.Subtitle>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="news-group">
        <h5 className="layout-title">News</h5>
        <div class="scrolling-wrapper">
            {
                news.map((info, i) => 
                <this.newsCarDisplay
                news = {info}
                ></this.newsCarDisplay>
            )}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
