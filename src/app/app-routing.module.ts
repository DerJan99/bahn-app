import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationContainerComponent} from "./components/station/station-container/station-container.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StationContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
