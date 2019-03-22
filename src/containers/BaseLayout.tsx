import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const BaseLayout: React.FunctionComponent = ({ children }) => (
  <Container style={{ marginTop: '7rem' }}>
    <Grid>{children} </Grid>
  </Container>
);

export default BaseLayout;
