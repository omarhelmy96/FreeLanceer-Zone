import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticNamberService } from 'src/app/shared/statistics-numbers.service';
import { StatisticNumber } from 'src/app/ViewModel/statistic-number';

@Component({
  selector: 'app-statistics-numbers',
  templateUrl: './statistics-numbers.component.html',
  styleUrls: ['./statistics-numbers.component.css']
})
export class StatisticsNumbersComponent implements OnInit {
  StatisticNumbers:StatisticNumber[];
  constructor(private StatisticService:StatisticNamberService,private router: Router) { }

  ngOnInit(): void {
    this.StatisticService.getAllStatistic().subscribe((data)=>{
      this.StatisticNumbers=data;
      console.log(data);
    });
  }
  DeleteConfirm(ID: number,Name:string) {
    if(confirm("Are you sure to delete "+Name)) {
      this.StatisticService.DeleteStatistic(ID).subscribe(()=>this.router.navigate(['/StatisticNumberAdmin']));
    }
  }
  GoToAdd(){
  this.router.navigate(['/admin/StatisticAddAdmin']);
  }
  GoToEdit(Id:number)
  {
    this.router.navigate(['/admin/StatisticEditAdmin', Id]);
  }

}
