import {Component, OnInit} from '@angular/core';

import {EventService} from "@bahn-app/services";
import {Stations} from "@bahn-app/interfaces";

@Component({
  selector: 'app-information-container',
  templateUrl: './information-container.component.html',
  styleUrls: ['./information-container.component.scss'],
})
export class InformationContainerComponent implements OnInit {
  public station: Stations;
  public stationExist: boolean = false;

  constructor(private stationEvent: EventService) {
  }

  ngOnInit(): void {
    this.stationEvent.stationEventBroker$.subscribe((station: Stations | null) => {
      if (station !== null) {
        console.log("Station: ", station);
        this.station = station;
        this.stationExist = true;
      } else {
        this.stationExist = false;
      }
    })
  }
}
