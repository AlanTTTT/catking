import React from 'react';
import { GiCat } from "react-icons/gi";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
  import Footer from "./footer";

export default class NewNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id='Home'>
        <Navbar style={{ backgroundColor: '#eccb6a' }} light expand="md">
          <NavbarBrand href="/" className="B1" style={{ color: 'white', fontSize:'30px', fontWeight: "bolder"}}> <GiCat className='Logo' style={{ color: 'white', fontSize:'50px'}}/>CatKing</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="#catCards" style={{ color: 'white', fontSize:'20px', fontWeight: "bolder"}}>MeowMeowPedia</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontSize:'20px', fontWeight: "bolder"}}>GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Footer" style={{ color: 'white', fontSize:'20px', fontWeight: "bolder"}}>Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}