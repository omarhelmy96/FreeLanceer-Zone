import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/shared/zone.service';
import { Zone } from 'src/app/ViewModel/zone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  Zones:Zone[];
  constructor(private ZoneServices:ZoneService,private router: Router) { }

  ngOnInit(): void {
    this.ZoneServices.getAllZones().subscribe(
      (res)=>{
        this.Zones=res;
      },
      (err)=>{
        console.log(err);
      }
    );

  }
  DeleteConfirm(ID: number,Name:string) {
    if(confirm("Are you sure to delete "+Name)) {
      this.ZoneServices.DeleteZone(ID).subscribe(()=>this.router.navigate(['/ZoneAdmin']));
    }
  }
  GoToEdit(Id:number)
  {
    this.router.navigate(['/admin/ZoneEditAdmin', Id]);
  }
  GoToAdd()
  {
    this.router.navigate(['/admin/ZoneAddAdmin']);
  }
}
