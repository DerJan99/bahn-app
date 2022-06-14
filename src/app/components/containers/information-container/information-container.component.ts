import {Component, OnInit} from '@angular/core';

import {EventService} from "@bahn-app/services";
import {Stations} from "@bahn-app/interfaces";

interface Availability {
  dayName: string;
  fromTime: string;
  toTime: string;
}

@Component({
  selector: 'app-information-container',
  templateUrl: './information-container.component.html',
  styleUrls: ['./information-container.component.scss'],
})
export class InformationContainerComponent implements OnInit {
  public station: Stations;
  public stationExist: boolean = false;
  public availabilityArr: Availability[] = [];

  constructor(private stationEvent: EventService) {
  }

  ngOnInit(): void {
    this.stationEvent.stationEventBroker$.subscribe((station: Stations | null) => {
      if (station !== null) {
        this.station = station;
        this.stationExist = true;
        this.createAvailabilityArr(station);
      } else {
        this.stationExist = false;
      }
    })
  }

  public createAvailabilityArr(station: Stations): void {
    this.availabilityArr = [];
    const availability = station.DBinformation.availability;
    Object.entries(availability).forEach((day) => {
      switch (day[0]) {
        case "monday": {
          this.availabilityArr.push({
            dayName: 'Montag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "tuesday": {
          this.availabilityArr.push({
            dayName: 'Dienstag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "wednesday": {
          this.availabilityArr.push({
            dayName: 'Mittwoch',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "thursday": {
          this.availabilityArr.push({
            dayName: 'Donnerstag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "friday": {
          this.availabilityArr.push({
            dayName: 'Freitag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "saturday": {
          this.availabilityArr.push({
            dayName: 'Samstag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "sunday": {
          this.availabilityArr.push({
            dayName: 'Sonntag',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
        case "holiday": {
          this.availabilityArr.push({
            dayName: 'Ferienzeiten',
            fromTime: day[1].fromTime,
            toTime: day[1].toTime
          });
          break;
        }
      }
    })
  }
}
