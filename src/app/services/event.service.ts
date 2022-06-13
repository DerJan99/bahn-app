import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Stations} from "@bahn-app/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public stationEventBrokerSub: BehaviorSubject<Stations | null> = new BehaviorSubject<Stations | null>(null);
  public stationEventBroker$ = this.stationEventBrokerSub.asObservable();
}
