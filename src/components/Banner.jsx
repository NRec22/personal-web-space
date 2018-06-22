import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

const Banner = () => (
  <Hero color="dark" size="medium" gradient>
    <Hero.Body>
      <Container>
        <Heading spaced size={1}>Neven Recchia</Heading>
        <Heading subtitle size={5}>Developer at day. Thrillseeker at night.</Heading>
      </Container>
    </Hero.Body>
  </Hero>
)

export default Banner;