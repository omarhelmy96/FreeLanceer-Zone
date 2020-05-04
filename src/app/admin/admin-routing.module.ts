import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { StatisticsNumbersComponent } from './statistics-numbers/statistics-numbers.component';
import { AddStatisticComponent } from './add-statistic/add-statistic.component';
import { EditStatisticComponent } from './edit-statistic/edit-statistic.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ZoneComponent } from './zone/zone.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';
import { AddZoneComponent } from './add-zone/add-zone.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path: 'StatisticNumberAdmin', component:StatisticsNumbersComponent},
  {path: 'StatisticAddAdmin', component:AddStatisticComponent},
  {path: 'StatisticEditAdmin/:Id', component:EditStatisticComponent},
  {path: 'Sponsor', component:SponsorComponent},
  {path: 'ZoneAdmin', component:ZoneComponent},
  {path: 'ZoneEditAdmin/:Id', component:ZoneEditComponent},
  {path: 'ZoneAddAdmin', component:AddZoneComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
