import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StationPageComponent} from "@bahn-app/components/pages";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
