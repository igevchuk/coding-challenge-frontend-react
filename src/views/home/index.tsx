import * as React from 'react';
import { connect } from 'react-redux';
import { BaseLayout } from './../../containers';
import IncidentList from './../../components/IncidentList';

import { fetchIncidents, searchIncidents } from "./../../actions";
import { IIncident as Incident } from './../../model';

interface IProps {
  incidents: Incident[],
  isLoading: boolean,
  error: string,
  fetchIncidents(option?: {}): void,
  searchIncidents(option?: {}): void
}
interface IState {
  search: string,
  fromDate: Date,
  toDate: Date,
  currentPage: number
}
class Home extends React.Component<IProps, IState> {
  public state = {
    search: "",
    fromDate: null,
    toDate: null,
    currentPage: 1
  };

  public componentDidMount() {
    const { currentPage } = this.state;
    const options = {
      page: currentPage,
      incident_type: "theft",
      proximity: 100
    };

    this.props.fetchIncidents(options);
  }

  public handleSearch(value) {
    this.setState({ search: value }, () => {
      this.props.searchIncidents({});
    });
  }

  public updateDate() {}

  public render() {
    const { incidents, isLoading, error } = this.props;
    console.log(incidents);
    return (
      <BaseLayout>
        <h1>Home</h1>
        <IncidentList incidents={incidents} />
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
