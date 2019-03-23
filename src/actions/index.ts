export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const FETCH_INCIDENTS_FAILURE = 'FETCH_INCIDENTS_FAILURE';

export const SEARCH_INCIDENTS = 'SEARCH_INCIDENTS';

export const FETCH_INCIDENT_DETAILS = 'FETCH_INCIDENT_DETAILS';
export const FETCH_INCIDENT_DETAILS_SUCCESS = 'FETCH_INCIDENT_DETAILS_SUCCESS';
export const FETCH_INCIDENT_DETAILS_FAILURE = 'FETCH_INCIDENT_DETAILS_FAILURE';

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

export const fetchIncidentDetails = (id) => ({
  type: FETCH_INCIDENT_DETAILS,
  id
});

export const fetchIncidentDetailsSuccess = (payload) => ({
  type: FETCH_INCIDENT_DETAILS_SUCCESS,
  payload
});

export const fetchIncidentDetailsFailure = (message) => ({
  type: FETCH_INCIDENT_DETAILS_FAILURE,
  message
});