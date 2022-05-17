import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from "./search/search.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,

    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
