import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_FAILURE,
  FETCH_INCIDENTS_SUCCESS,
  SEARCH_INCIDENTS,
  FETCH_INCIDENT_DETAILS,
  FETCH_INCIDENT_DETAILS_SUCCESS,
  FETCH_INCIDENT_DETAILS_FAILURE
} from '../actions';

const initialState = {
  incidents: {
    data: [],
    isLoading: false,
    error: null
  },
  details: {
    data: {},
    isLoading: false,
    error: null
  }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INCIDENTS:
    case SEARCH_INCIDENTS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_INCIDENTS_SUCCESS:
      return {
        incidents: [...action.payload],
        isLoading: false,
        error: null
      };
    case FETCH_INCIDENTS_FAILURE:
      return {
        incidents: [],
        isLoading: false,
        error: action.message
      };
    case FETCH_INCIDENT_DETAILS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_INCIDENT_DETAILS_SUCCESS:
      return {
        incidents: [...action.payload],
        isLoading: false,
        error: null
      };
    case FETCH_INCIDENT_DETAILS_FAILURE:
      return {
        incidents: [],
        isLoading: false,
        error: action.message
      };
    default:
      return state;
  }
}
