import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private API_URL = "https://api.deutschebahn.com/stada/v2";
  private API_KEY = environment.apiToken;

  constructor() { }
}
