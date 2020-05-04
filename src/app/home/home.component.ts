import { UserService } from './../shared/user.service';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  // userDetails;
  
  constructor(private router: Router
             , private userService: UserService
) {}

  ngOnInit(): void {
    // this.userService.getUserProfile().subscribe(
    //   (res) => {
    //     this.userDetails = res;
    //   },
    //   (err) => {
    //     console.log(err);
    //   } );   
  }

  

  
   
  
  // getImgUrl(){
  //   environment.ApiUri 
  // }
}
