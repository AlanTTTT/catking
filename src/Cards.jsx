import React from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="cards" id='catCards'>
    <h1>Habits for different Cats</h1>
    <p style={{fontSize: "25px" }}>Try to learn more about them!</p>
    <Row>
    <Col md="12" lg="4" data-aos="fade-up" data-aos-once="true" >
      <Card>
        <CardImg width="100%" src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9" alt="Card image cap" className="My3cards" />
        <CardBody>
          <CardTitle style={{fontSize: "25px" }}>Kitten</CardTitle>
          <p style={{textAlign:"left"}}><b>Age:</b>3-12 months</p>
          <p style={{textAlign:"left"}}><b>favourite food:</b>Milk and canned food</p>
          <p style={{textAlign:"left"}}><b>Habits:</b> Curious, like to explore things around</p>
          <Button color='dark' active={false} size="lg" outline={false}>Button</Button>
        </CardBody>
        </Card>

        </Col>
        <Col md="12" lg="4" data-aos="fade-up" data-aos-once="true" >
        <Card style={{justifyContent: "center"}}>
        <CardImg top width="100%" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle style={{fontSize: "25px" }}>Cat</CardTitle>
          <p style={{textAlign:"left"}}><b>Age:</b> 1-6 years</p>
          <p style={{textAlign:"left"}}><b>favourite food:</b>Puree, dry food and canned food</p>
          <p style={{textAlign:"left"}}><b>Habits:</b>Full of power and often run around</p>
          <Button color='dark' active={false} size="lg" outline={false}>Button</Button>
        </CardBody>
      </Card>
      </Col>
      
      <Col md="12" lg="4" data-aos="fade-up" data-aos-once="true" >
      <Card>
        <CardImg src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle style={{fontSize: "25px" }}>Old Cat</CardTitle>
          <p style={{textAlign:"left"}}><b>Age:</b> 7 years up</p>
          <p style={{textAlign:"left"}}><b>favourite food:</b>Puree and canned food</p>
          <p style={{textAlign:"left"}}><b>Habits:</b> Lazy, will find a place to sleep, rarely run</p>
          <Button color='dark' active={false} size="lg" outline={false}>Button</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default Example;