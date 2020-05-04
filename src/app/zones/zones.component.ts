import { Component, OnInit } from '@angular/core';
import { Zone } from '../ViewModel/zone';
import { ZoneService } from '../shared/zone.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  Zones:Zone[];
  ZonesImage:string[];
  ZonesAvailable:string[];
  customOptionsforZone:OwlOptions;

  constructor(private ZoneServices:ZoneService) { }

  ngOnInit(): void {
    var elem= document.getElementsByClassName("ZoneName");
    this.ZoneServices.getAllZones().subscribe(
      (res)=>{
        this.Zones=res;
        for (let index = 0; index < res.length; index++) {
          this.ZonesImage[index] = "http://localhost:2687/Images/"+res[index].imageUrl;  
        }
      },
      (err)=>{
        console.log(err);
      }
    );
    this.customOptionsforZone ={
      loop:true,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayHoverPause:true,
    dots: true,
    autoplay:false, 
    autoplaySpeed:1000,
    autoplayTimeout:2000,
    navSpeed:2000,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
    }   
    
    
  }
  myMove(e):void
  { 
  var flag1=0;
  var flag2=0;
  console.log();
  if(flag2==0)
  {
      let pos = 150;
      let id = setInterval(frame, 5);
      function frame() {
      if (pos == 50 && (flag1==0 || flag2==0) ) {
          flag1=1;
          e.target.nextSibling.style.display="block";
          // e.target.nextSibling.style.display="block";
          clearInterval(id);
      } else {

          pos--; 
          e.target.style.top = pos + "px"; 
      }

      }
      flag2=1;
  }
}
}
