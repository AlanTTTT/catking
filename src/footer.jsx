import React from "react";
import { Row, Col } from 'reactstrap';
import { AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import { SiFacebook, SiGmail, SiLinkedin } from "react-icons/si";
import { GiCat } from "react-icons/gi";
import {Button} from "reactstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="Footer" className="footer">
    <footer>
    <Row className="myInformation">
    <Col xs="12" sm="3"></Col>
          <Col xs="12" sm="4"><strong>My Address</strong><br />
          Ngau Tau Kok, Kowloon<br />
          HONG KONG<br />
          <AiOutlinePhone />: +852 55782848<br />
          <AiOutlineMail />: shingkwongtang@gmail.com
          </Col>
          <Col xs="12" sm="3"><strong>My Social Media</strong><br />
          <SiFacebook />  <SiGmail />  <SiLinkedin />
          </Col>
          <Col xs="12" sm="2"></Col>
        </Row>
    <GiCat id="homeButton" /><br></br>
    <p>Copyright ⓒ {year} Tang Shing Kwong</p>
    </footer>
    </div>
  );
}

export default Footer;