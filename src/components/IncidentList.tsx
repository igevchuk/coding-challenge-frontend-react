import * as React from "react";
import { Link } from 'react-router-dom';
import { Grid, Card } from 'semantic-ui-react';

import { IIncident as Incident } from './../model';

interface IProps {
  incidents: Incident[]
}

const IncidentLitItem: React.SFC<{ incident: Incident }> = ({ incident }) => {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Card>
          <Card.Header>
            <Link to={`/details/${incident.id}`}>{incident.title}</Link>
          </Card.Header>

          <Card.Content>
            <img src={incident.media.image_url_thumb} />
            {incident.description}
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
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

