import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/throttle';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { switchMap, map, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';

import { IIncident as Incident } from './../model';
import config from './../config';

import {
  CANCEL_FETCH,
  fetchIncidents,
  fetchIncidentsFailure,
  fetchIncidentsSuccess,
  searchIncidents
} from "../actions";

const url = config.API_URL;

export function fetchIncidentsEpic(action$) {
  // return action$
  //   .ofType(fetchIncidents)
  //   .switchMap(() => ajax.getJSON(url))
  //   .map(({ incidents }) => incidents)
  //   .map(incidents => fetchIncidentsSuccess(incidents))
  //   .takeUntil(action$.ofType(CANCEL_FETCH))
  //   .catch(error => Observable.of(fetchIncidentsFailure(error.message)));
    return action$.ofType(fetchIncidents).pipe(
      switchMap(() =>
        ajax(url).pipe(
          map((response: any) => response.incidents),
          map(incidents => fetchIncidentsSuccess(incidents)),
          takeUntil(action$.ofType(CANCEL_FETCH))
          // catch(error => Observable.of(fetchIncidentsFailure(error.message)));
        )
      )
    );
}

export function searchIncidentsEpic(action$) {
  // return action$
  //   .ofType(searchIncidents)
  //   // .throttle(200)
  //   .switchMap(() => {
  //     return ajax.getJSON(url);
  //   })
  //   .map(({ incidents }) => incidents)
  //   .map(incidents => fetchIncidentsSuccess(incidents))
  //   .takeUntil(action$.ofType(CANCEL_FETCH))
  //   .catch(error => Observable.of(fetchIncidentsFailure(error.message)));
  return action$.ofType(fetchIncidents).pipe(
    switchMap(() =>
      ajax.getJSON(url).pipe(
        map(({ incidents }) => incidents),
        map(incidents => fetchIncidentsSuccess(incidents)),
        takeUntil(action$.ofType(CANCEL_FETCH))
        // catch(error => Observable.of(fetchIncidentsFailure(error.message)));
      )
    )
  );
}



