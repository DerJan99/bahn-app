import {Component, OnInit} from '@angular/core';

import {Stations} from "@bahn-app/interfaces";
import {EventService} from "@bahn-app/services";

interface Icons {
  iconName: string;
  tooltipContent: string;
  isActive: boolean;
}

@Component({
  selector: 'app-icon-container',
  templateUrl: './icon-container.component.html',
  styleUrls: ['./icon-container.component.scss']
})
export class IconContainerComponent implements OnInit {
  public station: Stations;
  public stationExist: boolean = false;
  public icons: Icons[] = [];

  constructor(private stationEvent: EventService) {
  }

  ngOnInit(): void {
    this.stationEvent.stationEventBroker$.subscribe((station: Stations | null) => {
      if (station !== null) {
        this.station = station;
        this.mapButtons(this.station);
        this.stationExist = true;
      } else {
        this.stationExist = false;
      }
    })
  }

  private mapButtons(station: Stations): void {
    this.icons = [];
    Object.entries(station).forEach(([key, value]) => {
      switch (key) {
        case "hasParking": {
          this.icons.push({
            iconName: "local_parking",
            tooltipContent: "Parkplatz",
            isActive: value as boolean
          });
          break;
        }
        case "hasBicycleParking": {
          this.icons.push({
            iconName: "pedal_bike",
            tooltipContent: "Fahrradparkplatz",
            isActive: value as boolean
          });
          break;
        }
        case "hasLocalPublicTransport": {
          this.icons.push({
            iconName: "commute",
            tooltipContent: "ÖPNV",
            isActive: value as boolean
          });
          break;
        }
        case "hasPublicFacilities": {
          this.icons.push({
            iconName: "wc",
            tooltipContent: "Sanitäreinrichtungen",
            isActive: value as boolean
          });
          break;
        }
        case "hasLockerSystem": {
          this.icons.push({
            iconName: "lock",
            tooltipContent: "Schließfachsystem",
            isActive: value as boolean
          });
          break;
        }
        case "hasTaxiRank": {
          this.icons.push({
            iconName: "local_taxi",
            tooltipContent: "Taxi",
            isActive: value as boolean
          });
          break;
        }
        case "hasTravelNecessities": {
          this.icons.push({
            iconName: "shopping_cart",
            tooltipContent: "Kiosk",
            isActive: value as boolean
          });
          break;
        }
        case "hasSteplessAccess": {
          this.icons.push({
            iconName: "accessible",
            tooltipContent: "Stufenloser Zugang",
            isActive: value as boolean
          });
          break;
        }
        case "hasMobilityService": {
          this.icons.push({
            iconName: "map",
            tooltipContent: "Mobilitätsdienst",
            isActive: value as boolean
          });
          break;
        }
        case "hasWiFi": {
          this.icons.push({
            iconName: "wifi",
            tooltipContent: "WiFi",
            isActive: value as boolean
          });
          break;
        }
        case "hasTravelCenter": {
          this.icons.push({
            iconName: "info",
            tooltipContent: "Reisezentrum",
            isActive: value as boolean
          });
          break;
        }
        case "hasRailwayMission": {
          this.icons.push({
            iconName: "volunteer_activism",
            tooltipContent: "Bahnhofsmission",
            isActive: value as boolean
          });
          break;
        }
        case "hasDBLounge": {
          this.icons.push({
            iconName: "weekend",
            tooltipContent: "DB Lounge",
            isActive: value as boolean
          });
          break;
        }
        case "hasLostAndFound": {
          this.icons.push({
            iconName: "local_police",
            tooltipContent: "Fundbüro",
            isActive: value as boolean
          });
          break;
        }
        case "hasCarRental": {
          this.icons.push({
            iconName: "car_rental",
            tooltipContent: "Autovermietung",
            isActive: value as boolean
          });
          break;
        }
      }
    });
  }
}
