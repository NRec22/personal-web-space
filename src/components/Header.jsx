import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

const Header = () => (
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item id="home-button" href="/">Home</Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item id="about-button" href="/about">About Me</Navbar.Item>
        <Navbar.Item id="linkedin-button" href="https://www.linkedin.com/in/nevenrecchia/">LinkedIn</Navbar.Item>
        <Navbar.Item id="github-button" href="https://github.com/NRec22">Github</Navbar.Item>
        <Navbar.Item id="contact-button" href="mailto:nevenrecchia@gmail.com">Contact Me</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Header;