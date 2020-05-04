import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../ViewModel/freelancer';
import { UserStoriesService } from '../shared/user-stories.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-freelancers-opinions',
  templateUrl: './freelancers-opinions.component.html',
  styleUrls: ['./freelancers-opinions.component.css']
})
export class FreelancersOpinionsComponent implements OnInit {
  FreelancersWithOpinion:Freelancer[];
  constructor(private userStoryService:UserStoriesService) { }
  testimonialsOptions:OwlOptions;

  ngOnInit(): void {
    
    this.userStoryService.getFreelancerWithOpinion().subscribe(
      (res)=>{
        this.FreelancersWithOpinion=res as Freelancer[];  
        for (let FreelancerWithOpinion of this.FreelancersWithOpinion) {
          FreelancerWithOpinion.image=`${environment.host}/Images/${FreelancerWithOpinion.image}`;
        }
      }
      ,(err)=>{
        console.log(err);
      });
      this.testimonialsOptions={
        loop:true,
        rewind: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplayHoverPause:true,
        dots: false,
        autoplay:true, 
        autoplaySpeed:2000,
        autoplayTimeout:3000,
        navSpeed:2000,
        responsive: {
          0: {
            items: 1 
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 4
          }
        },
        nav: false
      }
  }

}
