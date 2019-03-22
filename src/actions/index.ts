export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const FETCH_INCIDENTS_FAILURE = 'FETCH_INCIDENTS_FAILURE';

export const SEARCH_INCIDENTS = 'SEARCH_INCIDENTS';

export const FETCH_INCIDENT = 'FETCH_INCIDENT';
export const FETCH_INCIDENT_SUCCESS = 'FETCH_INCIDENT_SUCCESS';
export const FETCH_INCIDENT_FAILURE = 'FETCH_INCIDENT_FAILURE';

export const fetchIncidents = () => ({
  type: FETCH_INCIDENTS
});

export const fetchIncidentsSuccess = (payload) => ({
  type: FETCH_INCIDENTS_SUCCESS,
  payload
});

export const fetchIncidentsFailure = (message) => ({
  type: FETCH_INCIDENTS_FAILURE,
  message
});

export const searchIncidents = (query) => ({
  type: SEARCH_INCIDENTS,
  query
});

export const fetchIncident = (id) => ({
  type: FETCH_INCIDENT,
  id
});

export const fetchIncidentSuccess = (payload) => ({
  type: FETCH_INCIDENT_SUCCESS,
  payload
});

export const fetchIncidentFailure = (message) => ({
  type: FETCH_INCIDENT_FAILURE,
  message
});