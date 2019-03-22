import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_FAILURE,
  FETCH_INCIDENTS_SUCCESS,
  FETCH_INCIDENT,
  FETCH_INCIDENT_SUCCESS,
  FETCH_INCIDENT_FAILURE,
  SEARCH_INCIDENTS
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
    case FETCH_INCIDENT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_INCIDENT_SUCCESS:
      return {
        incidents: [...action.payload],
        isLoading: false,
        error: null
      };
    case FETCH_INCIDENT_FAILURE:
      return {
        incidents: [],
        isLoading: false,
        error: action.message
      };
    default:
      return state;
  }
}
