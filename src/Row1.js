import React, { Component } from "react";
import { Button, Navbar } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Example from "./NewNavbar";
import { GoSearch } from "react-icons/go";
import { GiHollowCat } from "react-icons/gi";

export default class Row1 extends React.Component {
  render() {
    return (
        <Container style={{ backgroundColor: '#eccb6a' }}>
        <Example></Example>
        <div className="row1">
        <Row>
          <Col lg="6" md="12">
          <h1 class="big-heading">Inside the mind of a cat and learn more about their habits</h1>
          <Button className="download-btn" color="dark" active={false} size="lg" outline={false}><GiHollowCat className="ReactIcons" />Habits</Button>{""}
          <Button className="download-btn" color="light" active={false} size="lg" outline={true}><GoSearch className="ReactIcons" />About Cats</Button>{""}
          </Col>
          <Col lg="6" md="12" data-aos="fade-left" data-aos-once="true">
          <img src="https://i.pinimg.com/originals/a0/ed/b8/a0edb80c5256797d1363bc9de6a1cbb8.png" alt="Cat" className="cat" />
          </Col>
        </Row>
        </div>
        </Container>
    )}}