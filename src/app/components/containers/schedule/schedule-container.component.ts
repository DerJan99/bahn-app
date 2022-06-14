import {Component, OnInit} from '@angular/core';

import {EventService, HttpService} from "@bahn-app/services";
import {ComArrival, ComDeparture, Stations} from "@bahn-app/interfaces";

interface Track {
  [track: string]: Schedule;
}

interface Schedule {
  id: string;
  tripId: string;
  trainName: string;
  type: string;
  arrivalTime: Date;
  departureTime?: Date;
  track: string;
}

@Component({
  selector: 'app-schedule-container',
  templateUrl: './schedule-container.component.html',
  styleUrls: ['./schedule-container.component.scss']
})
export class ScheduleContainerComponent implements OnInit {
  public schedules: Schedule[] = [];
  public loading: boolean = true;

  constructor(private httpService: HttpService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.stationEventBroker$.subscribe((station: Stations | null) => {
      if (station !== null) {
        this.getSchedule(station.id)
      }
    });
  }

  private getSchedule(id: string) {
    this.httpService.getArrivals(id, 200).subscribe((arrivals: ComArrival[]) => {
      this.httpService.getDepartures(id, 200).subscribe((departures: ComDeparture[]) => {
        this.loading = false;
        this.createSchedule(arrivals, departures);
      });
    });
  }

  private createSchedule(arrivals: ComArrival[], departures: ComDeparture[]) {
    this.schedules = [];
    arrivals.forEach((arrival) => {
      this.schedules.push({
        id: arrival.stop.id,
        tripId: arrival.tripId,
        trainName: arrival.line.name,
        type: arrival.line.operator.name,
        track: arrival.platform,
        arrivalTime: arrival.plannedWhen !== undefined ? new Date(arrival.plannedWhen) : undefined,
        departureTime: departures.find((departure) => departure.tripId === arrival.tripId).plannedWhen !== undefined
          ? new Date(departures.find((departure) => departure.tripId === arrival.tripId).plannedWhen)
          : undefined
      });
    })
  }
}
