import styled from 'styled-components';
import { Card, Grid } from 'semantic-ui-react';

export const IncidentCard = styled(Card)`
`;

export const IncidentCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IncidentCardHeader = styled.h3`
  && {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export const IncidentCardMeta = styled(Card.Meta)`
  && {
    margin-bottom: 1rem;
  }
`;

export const IncidentCardDescription = styled.p`
  && {
    margin-bottom: 1rem;
  }
`;

export const IncidentCardFooter = styled(Card.Meta)`

`;