import * as React from 'react';
import { Container } from 'semantic-ui-react';

const BaseLayout: React.SFC = ({ children }) => (
  <Container style={{ marginTop: '7rem', marginBottom: '7rem' }}>
    {children} 
  </Container>
);

export default BaseLayout;
