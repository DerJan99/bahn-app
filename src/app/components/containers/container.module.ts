import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InformationContainerComponent} from './information-container/information-container.component';
import {IconContainerComponent} from './icon-container/icon-container.component';
import {ScheduleContainerComponent} from './schedule/schedule-container.component';

import {SharedModule} from "@bahn-app/components/shared";

@NgModule({
  declarations: [
    InformationContainerComponent,
    IconContainerComponent,
    ScheduleContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    InformationContainerComponent,
    IconContainerComponent,
    ScheduleContainerComponent
  ]
})
export class ContainerModule {
}
