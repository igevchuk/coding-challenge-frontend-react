import * as React from "react";
import * as DatePicker from 'react-datepicker';
import { Grid, Input } from "semantic-ui-react";

interface IProps {
  search: string,
  startDate: Date,
  endDate: Date,
  handleSearch(e: React.FormEvent<HTMLInputElement>): void,
  handleDateChange(e: React.FormEvent<HTMLInputElement>, name: string): void
}

const Filter: React.SFC<IProps> = ({ search, startDate, endDate, handleSearch, handleDateChange }) => (
  <Grid padded={true}>
    <Grid.Row>
      <Grid.Column width={8}>
        <Input
          icon="search"
          placeholder="Search..."
          fluid={true}
          value={search}
          onChange={handleSearch}
        />
      </Grid.Column>
      <Grid.Column width={8}>
        <DatePicker selected={startDate} onChange={(e) => handleDateChange(e, 'startDate')} />
        <DatePicker selected={endDate} onChange={(e) => handleDateChange(e, 'endDate')} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Filter;
