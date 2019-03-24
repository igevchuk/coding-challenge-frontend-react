import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { switchMap, map, takeUntil, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from "redux-observable";
import * as queryString from 'query-string';

import { IIncident as Incident } from './../model';
import config from './../config';

import {
  FETCH_INCIDENTS,
  SEARCH_INCIDENTS,
  CANCEL_FETCH,
  fetchIncidents,
  fetchIncidentsFailure,
  fetchIncidentsSuccess,
  searchIncidents
} from "../actions";

const baseUrl = config.API_URL;

export function fetchIncidentsEpic(action$) {
    return action$.pipe(
      ofType(FETCH_INCIDENTS),
      switchMap(({ options }) => {
        const url = !!options
          ? `${baseUrl}?${queryString.stringify(options)};`
          : baseUrl;

        return ajax.getJSON(url).pipe(
          map(({ incidents }) => fetchIncidentsSuccess(incidents)),
          takeUntil(action$.ofType(CANCEL_FETCH)),
          catchError(error => of(fetchIncidentsFailure(error.message)))
        );
      })
    );
}

export function searchIncidentsEpic(action$) {
  return action$.pipe(
    ofType(SEARCH_INCIDENTS),
    switchMap(() =>
      ajax(baseUrl).pipe(
        map(({ response }) => response),
        map(({ incidents }) => fetchIncidentsSuccess(incidents)),
        takeUntil(action$.ofType(CANCEL_FETCH)),
        catchError(error => of(fetchIncidentsFailure(error.message)))
      )
    )
  );
}



