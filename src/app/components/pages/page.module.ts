import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StationPageComponent} from "./station-page/station-page.component";
import {SharedModule} from "@bahn-app/components/shared";
import {ContainerModule} from "@bahn-app/components/containers";

export {StationPageComponent} from "./station-page/station-page.component";

@NgModule({
  declarations: [
    StationPageComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    ContainerModule
  ],
  exports: [
    StationPageComponent,
  ]
})
export class PageModule { }
