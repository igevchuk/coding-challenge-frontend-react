import * as React from "react";
import { Segment, Loader } from "semantic-ui-react";

const Spinner:React.SFC<{}> = () => (
  <Segment padded="very">
    <Loader>Loading</Loader>
  </Segment>
);

export default Spinner;
