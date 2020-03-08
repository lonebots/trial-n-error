import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./components/assets/css/greet.css";

export const Home = () => (
  <>
    <div text-align="left">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8} className="gre">
            feel
            <br />
            free to
            <br />
            <Carousel
              className="car"
              data-interval="1"
              controls="false"
              indicator="false"
            >
              <Carousel.Item>flea.</Carousel.Item>
              <Carousel.Item>music.</Carousel.Item>
              <Carousel.Item>munch.</Carousel.Item>
            </Carousel>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </Container>
    </div>
  </>
);
