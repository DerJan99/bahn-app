import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchComponent} from "./search/search.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    SearchComponent,
    ToolbarComponent,
    IconComponent
  ],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    SearchComponent,
    ToolbarComponent,
    IconComponent
  ]
})
export class SharedModule {
}
