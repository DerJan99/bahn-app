import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationContainerComponent } from './station-container/station-container.component';



@NgModule({
  declarations: [
    StationContainerComponent
  ],
  exports: [
    StationContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StationModule { }
