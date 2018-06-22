import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

const PageFooter = () => (
  <Footer>
    <Container>
      <Content>
        <p>Powered by React and Bulma.</p>
      </Content>
    </Container>
  </Footer>
);

export default PageFooter;