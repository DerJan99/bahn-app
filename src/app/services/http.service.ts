import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";

import {ComArrival, ComDeparture, ComStations, Stations} from "@bahn-app/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getStations(query: string, limit?: number, fuzzy: boolean = true, completion: boolean = true) {
    const params: HttpParams = new HttpParams().set("query", query).set("fuzzy", fuzzy).set("completion", completion);
    if (limit !== undefined) params.set("limit", limit);

    return this.http.get(environment.apiUrl + "stations", {
        params: params
      }
    ) as Observable<ComStations>;
  };

  public getStation(id: string) {
    return this.http.get(environment.apiUrl + "stations" + "/" + id) as Observable<Stations>;
  }

  public getArrivals(id: string, duration?: number) {
    const params: HttpParams = new HttpParams().set("id", id);
    if (duration !== undefined) params.set("durations", duration);

    return this.http.get(environment.apiUrl + "stops" + "/" + id + "/arrivals", {
      params: params
    }) as Observable<ComArrival[]>;
  }

  public getDepartures(id: string, duration?: number) {
    const params: HttpParams = new HttpParams().set("id", id);
    if (duration !== undefined) params.set("durations", duration);

    return this.http.get(environment.apiUrl + "stops" + "/" + id + "/departures", {
      params: params
    }) as Observable<ComDeparture[]>;
  }
}
