import { Component, OnInit } from '@angular/core';
import { StatisticNamberService } from '../shared/statistics-numbers.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  NumberList:number[];
  DescriptionList:string[];
  timer:any;
  flag:number;
  value:number[];
  constructor(private StatisticNamberService:StatisticNamberService) {
    this.flag=0;
      this.value=[0,0,0,0];
   }

  ngOnInit(): void {
    this.StatisticNamberService.getAllDescription().subscribe(
      (res)=>{
        this.DescriptionList=res;
        console.log(this.DescriptionList);
      },
      (err)=>{
        console.log(err);
      }
    );
    
    this.StatisticNamberService.getAllNamber().subscribe(
      (res)=>{
        this.NumberList=res;
      },
      (err)=>{
        console.log(err);
      }
    );

  }

  getStatsticNumber(value:number): void {
    for (let index = 0; index < this.NumberList.length; index++) {
      if(value>60 && this.flag==0)
     {
        this.timer = setInterval( ()=>{this.value[index]!=this.NumberList[index]?this.value[index]+=this.NumberList[index]/this.NumberList[this.NumberList.length-1]:clearInterval(this.timer)},100);       
     }  
      
    }
  }
}
