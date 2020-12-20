import React, { useState } from "react"

import { Container, Row, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

import { Menu } from './Menu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header style={{boxShadow: '0 8px 6px -6px #2E58B3'}}>
      <Container>
        <Row>
        <Navbar className="col" light expand="md">
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faBriefcase} size="2x" title="Mala" color="#2E58B3"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Menu />
          </Collapse>
        </Navbar>
        </Row>
      </Container>
    </header>
  )
}
