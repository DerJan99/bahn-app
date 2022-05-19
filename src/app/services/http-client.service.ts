import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ApiParams} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private API_URL = "https://api.deutschebahn.com/stada/v2";
  private API_KEY = environment.apiToken;

  constructor(private http: HttpClient) { }

  public getStation(apiParams: ApiParams) {
    return this.http.get(`${this.API_URL}/stations`, {
      headers: {
        'Authorization': `Bearer ${this.API_KEY}`
      },
      params: {
        ...apiParams
      }
    });
  }

  public getStations(limit: number) {
    return this.http.get(`${this.API_URL}/stations`, {
      headers: {
        'Authorization': `Bearer ${this.API_KEY}`
      },
      params: {
        limit: limit
      }
    });
  }
}
