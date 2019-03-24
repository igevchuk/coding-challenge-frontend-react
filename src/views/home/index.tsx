import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { BaseLayout } from './../../containers';
import Filter from './../../components/Filter';
import IncidentList from './../../components/IncidentList';
import ErrorMessage from './../../components/ErrorMessage';
import Spinner from './../../components/Spinner';

import { fetchIncidents, searchIncidents } from "./../../actions";
import { IIncident as Incident } from './../../model';
import config from './../../config';

interface IProps {
  incidents: Incident[],
  isLoading: boolean,
  error: string,
  fetchIncidents(option?: {}): void,
  searchIncidents(option?: {}): void
}
interface IState {
  search: string,
  startDate: Date,
  endDate: Date,
  currentPage: number
}
class Home extends React.Component<IProps, IState> {
  public state = {
    search: "",
    startDate: null,
    endDate: null,
    currentPage: 1
  };

  public componentDidMount() {
    const { currentPage } = this.state;
    const options = {
      page: currentPage,
      incident_type: "theft",
      proximity: `${config.default_location.latitude},${
        config.default_location.longitude
      }`,
      proximity_square: 100,
      per_page: 10
    };

    this.props.fetchIncidents(options);
  }

  public handleSearch({ target }) {
    const value = target.value;
    this.setState({ search: value }, () => {
      this.props.searchIncidents({});
    });
  }

  public handleDateChange(e, name) {
    console.log(e)
  }

  public renderContent() {
    const { incidents, error, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else if (!!error) {
      return <ErrorMessage />;
    } else {
      return <IncidentList incidents={incidents} />;
    }
  }

  public render() {
    const { incidents, isLoading, error } = this.props;
    const { search, startDate, endDate } = this.state;

    console.log(incidents);
    return (
      <BaseLayout>
        <h1>Home</h1>

        <Filter
          search={search}
          startDate={startDate}
          endDate={endDate}
          handleSearch={this.handleSearch}
          handleDateChange={this.handleDateChange}
        />

        {this.renderContent()}
      </BaseLayout>
    );
  }
}

const mapStateToProps = ({ incidents: {data, isLoading, error }}) => ({
  incidents: data,
  isLoading,
  error
});

const mapDispatchToProps = (dispatch) => ({
  fetchIncidents: (options) => dispatch(fetchIncidents(options)),
  searchIncidents: (options) => dispatch(searchIncidents(options))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
