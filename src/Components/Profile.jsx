import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Profile extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.imgSrc} />
        <Card.Body>
          <Card.Title>{this.props.fullName}</Card.Title>
          <Card.Text>{this.props.bio}</Card.Text>
          <Card.Text>{this.props.profession}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
