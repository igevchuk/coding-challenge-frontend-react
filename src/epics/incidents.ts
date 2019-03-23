import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import config from './../config';

import {
  fetchIncidents,
  fetchIncidentsFailure,
  fetchIncidentsSuccess,
  searchIncidents
} from "../actions";

const url = config.API_URL;

export function fetchIncidentsEpic(action$) {
  return action$
    .ofType(fetchIncidents)
    .switchMap(() => {
      return ajax
        .getJSON(url)
        // .map(data => data.results)
    })
    .map(incidents => fetchIncidentsSuccess(incidents))
    .catch(error => Observable.of(fetchIncidentsFailure(error.message)))
}

export function searchIncidentsEpic(action$) {
  return action$
    .ofType(searchIncidents)
    .switchMap(() => {
      return ajax
        .getJSON(url)
        // .map(data => data.results)
    })
    .map(incidents => fetchIncidentsSuccess(incidents))
    .catch(error => Observable.of(fetchIncidentsFailure(error.message)))
}



