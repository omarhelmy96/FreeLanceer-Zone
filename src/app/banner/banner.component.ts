import { Component, OnInit } from '@angular/core';
import { BannerImageService } from '../shared/banner-image.service';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannarImages:string[];

  constructor(    private BannerImgs: BannerImageService
    ) { }
    userstoryoptions: OwlOptions;

  ngOnInit(): void {
    this.BannerImgs.getImages().subscribe((data)=>{
      this.bannarImages = data;
      for (let index = 0; index < this.bannarImages.length; index++) {
        this.bannarImages[index]=`${environment.host}/Images/${this.bannarImages[index]}`
      }
    });

    this.userstoryoptions = {
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
    };
  }

}
