// WineList.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Col, Card } from "react-materialize";

class WineList extends Component {
  render() {
    return (
      <Carousel options={{ fullWidth: false }}>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card 1
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card 2.
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card 3.
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card 4.
          </Card>
        </Col>
      </Carousel>
    );
  }
}

export default WineList;
