import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {distinctUntilChanged, map, Observable, startWith} from "rxjs";

import {EventService, HttpService} from "@bahn-app/services";
import {ComStations, Stations} from "@bahn-app/interfaces";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private responses: ComStations;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  formControl = new FormControl();

  constructor(private httpService: HttpService, private eventService: EventService) {
    this.fetchStation();
  }

  public ngOnInit() {
  }

  private filterOptions(value: string) {
    const filterValue = value.toLowerCase();
    if (this.options !== undefined && filterValue.length > 0) {
      this.getStations(filterValue);
      return this.options.filter(option => option.toLowerCase().startsWith(filterValue))
    }
    return [];
  }

  private fetchStation() {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(""),
      distinctUntilChanged(),
      map(value => this.filterOptions(value || ""))
    ) as Observable<string[]>;
  }

  private getStations(searchString: string) {
    try {
      this.httpService.getStations(searchString).subscribe((res: ComStations) => {
        this.responses = res;
        Object.entries(res).forEach(([_key, value]) => {
          this.options = [...new Set(this.options), value!.name]
        });
      })
    } catch (e) {
      console.error(e);
    }
  }

  public eventSelected(item: MatAutocompleteSelectedEvent) {
    let stationId: string = "";
    Object.entries(this.responses).forEach(([key, value]) => {
      if (value!.name === item.option.value) {
        stationId = key;
      }
    })

    try {
      this.httpService.getStation(stationId).subscribe((data: Stations) => {
        this.eventService.stationEventBrokerSub.next(data);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
