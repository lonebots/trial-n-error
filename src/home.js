import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./components/assets/css/home.css";

function home() {
  return (
    <div className="hm">
      <Card border="primary" style={{ width: "35rem" }}>
        <Card.Header>Lets fight Corona !!</Card.Header>
        <Card.Body>
          <Card.Title>Add contegion point</Card.Title>
          <Card.Text>
            Click on Add Now to set the route map of the infected
          </Card.Text>
          <Button variant="primary">Add Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default home;
