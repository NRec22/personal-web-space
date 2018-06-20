import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

const Header = () => (
  <Navbar color="light">
    <Navbar.Brand>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>About Me</Navbar.Item>
        <Navbar.Item>Contact</Navbar.Item>
        <Navbar.Item>LinkedIn</Navbar.Item>
        <Navbar.Item>Github</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Header;