import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationContainerComponent } from './station-container/station-container.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    StationContainerComponent
  ],
  exports: [
    StationContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StationModule { }
