import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home')
    }
  }

  onSubmit() {
    this.Service.login().subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/home");
        localStorage.setItem('email', res.email)
        localStorage.setItem('userName', res.userName)
        localStorage.setItem('imageUrl', res.imageUrl)
        localStorage.setItem('role',res.role)
        console.log(res);
      },
      err => {
        if (err.status == 400) {
          this.toastr.error("incorrect UserName or Password", "Authentication Filed");
        } else {
          console.log(err);
        }
      }
    );
  }

}
