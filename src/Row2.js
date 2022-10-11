import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { GiAbstract013 } from "react-icons/gi";
import { HiCheckCircle } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

export default class Row2 extends React.Component {
  render() { 
    return (
    <Container style={{ backgroundColor: 'white', textAlign: "center" }}> 
    <Row className="features" data-aos="fade-left" id="Feature">
        <Col md="12" lg="4">
        <a href="#"><i className="icon"><HiCheckCircle className="icon" /></i></a>
        <h2>Useful</h2>
        <p>Help you understand your cat better</p>
        </Col>
        <Col md="12" lg="4">
        <a href="#"><i className="icon"><GiAbstract013 className="icon" /></i></a>
        <h2>In-depth analysis</h2>
        <p>We have the strongest analysis team to follow the habits of different cats</p>
        </Col>
        <Col md="12" lg="4">      
        <a href="#"><i className="icon"><AiFillHeart className="icon" /></i></a>
        <h2>Increase attractiveness</h2>
        <p>Help you attract cats to your side</p>
        </Col>
      </Row>
      </Container>
    )}}