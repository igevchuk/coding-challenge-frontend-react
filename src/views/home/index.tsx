import * as React from 'react';
import { connect } from 'react-redux';
import { BaseLayout } from './../../containers';

import { fetchIncidents, searchIncidents } from "./../../actions";
import { IIncident as Incident } from './../../model';

interface IProps {
  incidents: Incident[],
  isLoading: boolean,
  error: string,
  fetchIncidents(): void
}
interface IState {
  search: string,
  fromDate: Date,
  toDate: Date,
  currentPage: number
}
class Home extends React.Component<IProps, IState> {
  public state = {
    search: '',
    fromDate: null,
    toDate: null,
    currentPage: 1
  }

  public componentDidMount() {
    this.props.fetchIncidents();
  }

  public render() {
    console.log(this.props)
    return (
      <BaseLayout>
          <h1>Home</h1>
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
  fetchIncidents: () => dispatch(fetchIncidents()),
  searchIncidents: (query) => dispatch(searchIncidents(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
