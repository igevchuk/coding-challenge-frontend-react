import * as React from "react";
import { Message } from "semantic-ui-react";

const ErrorMessage = () => (
  <Message negative={true}>
    <Message.Header>Oops, something went wrong.</Message.Header>
    <p>Try later.</p>
  </Message>
);

export default ErrorMessage;
