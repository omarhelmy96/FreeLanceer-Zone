import { Component, OnInit } from '@angular/core';
import { StatisticNumber } from 'src/app/ViewModel/statistic-number';
import { StatisticNamberService } from 'src/app/shared/statistics-numbers.service';

@Component({
  selector: 'app-add-statistic',
  templateUrl: './add-statistic.component.html',
  styleUrls: ['./add-statistic.component.css']
})
export class AddStatisticComponent implements OnInit {
  id:number=0;
  statisticNumber:StatisticNumber;
  constructor(private  StatisticNamberService:StatisticNamberService) {
   }

  ngOnInit(): void {
    
  }
  PushStatistic(Number:number,Description:string){
    console.log(Number);
    this.statisticNumber= {id: 0, number:Number,description: Description};
    this.StatisticNamberService.PostStaticNumber(this.statisticNumber).subscribe();
  }

}
