import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Header from './Header';

const Banner = () => (
  <Hero color="dark" size="medium" gradient>
    <Header />
    <Hero.Body>
      <Container>
        <Heading spaced size={1}>Neven Recchia</Heading>
        <Heading subtitle size={5}>Aspiring developer.</Heading>
      </Container>
    </Hero.Body>
  </Hero>
)

export default Banner;