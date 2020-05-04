import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StatisticsNumbersComponent } from './statistics-numbers/statistics-numbers.component';
import { StatisticNamberService } from '../shared/statistics-numbers.service';
import { SponsorService } from '../shared/sponsor.service';
import { FormsModule } from '@angular/forms';
import { EditStatisticComponent } from './edit-statistic/edit-statistic.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';
import { ZoneComponent } from './zone/zone.component';
import { SponsorComponent } from './sponsor/sponsor.component';


@NgModule({
  declarations: [AdminComponent, StatisticsNumbersComponent,EditStatisticComponent,ZoneEditComponent,ZoneComponent,SponsorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
