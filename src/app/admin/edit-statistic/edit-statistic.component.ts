import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticNumber } from 'src/app/ViewModel/statistic-number';
import { StatisticNamberService } from 'src/app/shared/statistics-numbers.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-statistic',
  templateUrl: './edit-statistic.component.html',
  styleUrls: ['./edit-statistic.component.css']
})
export class EditStatisticComponent implements OnInit {
  ThisStatisticID:number;
  ThisStatistic:StatisticNumber;
  constructor(private activatedRoute: ActivatedRoute,private statisticNamberService:StatisticNamberService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params) => {
      this.ThisStatisticID = params['Id'];
      this.statisticNamberService.GetSingleStatistic(this.ThisStatisticID).subscribe((data)=>{
        this.ThisStatistic=data;
      });
    });
  }
  SaveEditsstatic():void
  {
   this.statisticNamberService.PutStatistic(this.ThisStatistic).subscribe();
  }
}
