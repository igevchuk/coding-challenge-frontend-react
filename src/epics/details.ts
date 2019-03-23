import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import config from './../config';

import {
  fetchIncidentDetails,
  fetchIncidentDetailsFailure,
  fetchIncidentDetailsSuccess,
} from "../actions";

const url = config.API_URL;

export function fetchIncidentDetailsEpic(action$) {
  return action$
    .ofType(fetchIncidentDetails)
    .switchMap(() => {
      return ajax
        .getJSON(url)
        // .map(data => data.results)
    })
    .map(details => fetchIncidentDetailsSuccess(details))
    .catch(error => Observable.of(fetchIncidentDetailsFailure(error.message)))
}




