import { combineEpics } from "redux-observable";
import { fetchIncidentsEpic, searchIncidentsEpic } from './incidents';
import { fetchIncidentDetailsEpic } from './details';

const rootEpic = combineEpics(
  fetchIncidentsEpic,
  searchIncidentsEpic,
  fetchIncidentDetailsEpic
);

export default rootEpic;