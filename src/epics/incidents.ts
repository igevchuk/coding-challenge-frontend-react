import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { switchMap, map, takeUntil, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from "redux-observable";

import { IIncident as Incident } from './../model';
import config from './../config';

import {
  FETCH_INCIDENTS,
  SEARCH_INCIDENTS,
  CANCEL_FETCH,
  fetchIncidentsFailure,
  fetchIncidentsSuccess,
  searchIncidents
} from "../actions";

const url = config.API_URL;

export function fetchIncidentsEpic(action$) {
    return action$.pipe(
      ofType(FETCH_INCIDENTS),
      switchMap(() =>
        ajax(url).pipe(
          map(({ response }) => response),
          map(({ incidents }) => fetchIncidentsSuccess(incidents)),
          takeUntil(action$.ofType(CANCEL_FETCH)),
          catchError(error => of(fetchIncidentsFailure(error.message))),
        )
      )
    );
}

export function searchIncidentsEpic(action$) {
  return action$.pipe(
    ofType(SEARCH_INCIDENTS),
    switchMap(() =>
      ajax(url).pipe(
        map(({ response }) => response),
        map(({ incidents }) => fetchIncidentsSuccess(incidents)),
        takeUntil(action$.ofType(CANCEL_FETCH)),
        catchError(error => of(fetchIncidentsFailure(error.message)))
      )
    )
  );
}



