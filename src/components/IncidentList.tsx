import * as React from "react";
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';
import {
  IncidentCard,
  IncidentCardContent,
  IncidentCardHeader,
  IncidentCardMeta,
  IncidentCardDescription,
  IncidentCardFooter
} from "./styled/IncidentList.style";
import { IIncident as Incident } from './../model';
import { formatDate } from './../helpers';

interface IProps {
  incidents: Incident[]
}

const IncidentLitItem: React.SFC<{ incident: Incident }> = ({ incident, ...props }) => {
  const renderFooterContent = () => {
    const { address, occurred_at } = incident;
    
    return `${formatDate(occurred_at)} - ${address}`;
  }
  return (
    <IncidentCard fluid={true} raised={true}>
      <Grid padded={true}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={incident.media.image_url_thumb} bordered={true} />
          </Grid.Column>

          <Grid.Column width={12}>
            <IncidentCardHeader as="h3">
              <Link to={`/details/${incident.id}`}>{incident.title}</Link>
            </IncidentCardHeader>

            <IncidentCardMeta>
              Updated: {formatDate(incident.updated_at)}
            </IncidentCardMeta>

            <IncidentCardDescription>
              {incident.description}
            </IncidentCardDescription>
            
            <IncidentCardFooter>{renderFooterContent()}</IncidentCardFooter>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </IncidentCard>
  );
};

const IncidentList:React.SFC<IProps> = ({ incidents }) => (
  <Grid padded={true}>
    {
      incidents.map(incident => <IncidentLitItem incident={incident} key={incident.id} />)
    }
  </Grid>
)

export default IncidentList;

