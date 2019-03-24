import * as React from 'react';
import { Container } from 'semantic-ui-react';

const BaseLayout: React.FunctionComponent = ({ children }) => (
  <Container style={{ marginTop: '7rem' }}>
    {children} 
  </Container>
);

export default BaseLayout;
