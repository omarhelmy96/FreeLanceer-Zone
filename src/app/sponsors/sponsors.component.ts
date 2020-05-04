import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Sponsor } from '../ViewModel/sponsor';
import {SponsorService} from '../shared/sponsor.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor(private SponsorService:SponsorService) { }
  customOptionsForPartiners:OwlOptions;
  SponsorImages:Sponsor[];
  ngOnInit(): void {
    this.customOptionsForPartiners = {
      loop:true,
      rewind: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplayHoverPause:true,
      dots: false,
      autoplay:true, 
      autoplaySpeed:2000,
      autoplayTimeout:4000,
      navSpeed:2000,
      responsive: {
        0: {
          items: 1 
        },
        400: {
          items: 1
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
    this.SponsorService.getAllImageSponsor().subscribe(
      (res)=>{
        this.SponsorImages=res;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  

}
