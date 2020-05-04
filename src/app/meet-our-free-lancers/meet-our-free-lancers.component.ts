import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../ViewModel/freelancer';
import { UserStoriesService } from '../shared/user-stories.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meet-our-free-lancers',
  templateUrl: './meet-our-free-lancers.component.html',
  styleUrls: ['./meet-our-free-lancers.component.css']
})
export class MeetOurFreeLancersComponent implements OnInit {
  FreelancersWithStories:Freelancer[];
  constructor(    private userStoryService:UserStoriesService,
    ) { }
    userstoryoptions: OwlOptions;
  ngOnInit(): void {
    this.userStoryService.getFreelancerWithStories().subscribe(
      (res)=>{
        this.FreelancersWithStories=res;  
                  console.log(res); 
        for (const freelancerWithStory of this.FreelancersWithStories) {
            freelancerWithStory.image=`${environment.host}/Images/${freelancerWithStory.image}`;
        }
       
      }
      ,(err)=>{
        console.log(err);
      });
      this.userStoryService.getFreelancerWithStories().subscribe(
        (res)=>{
          this.FreelancersWithStories=res;  
                    console.log(res); 
          for (const freelancerWithStory of this.FreelancersWithStories) {
              freelancerWithStory.image=`${environment.host}/Images/${freelancerWithStory.image}`;
          }
         
        }
        ,(err)=>{
          console.log(err);
        });
  }

}
