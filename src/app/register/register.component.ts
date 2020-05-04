import { UserService } from './../shared/user.service';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor(public Service: UserService, private toastr: ToastrService, private router: Router) { }

  ngAfterViewInit(): void {
    var box = document.getElementById("box");
    var file = document.getElementById("file");
    box.addEventListener("click", function() {
      file.click();
    });
  }

  GetFile(event) {
    var image = document.getElementById("image");
    var files = event.target.files;
    if (files && files[0]) {
      console.log("true");
      var reader = new FileReader();

      reader.onload = function(e) {
        image.setAttribute("src", e.target.result.toString());
        image.style.borderRadius = "50%";
      };
      reader.readAsDataURL(files[0]);
      console.log(files[0])
      this.Service.formModel.get("ImageUrl").setValue(files[0]);
    }
  }



  ngOnInit() {
    this.Service.formModel.reset();
    if(localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home')
    }
  }

  onSubmit() {
    this.Service.register().subscribe(
      (res: any) => {
        // if (res.succeeded) {
          this.Service.formModel.reset();
          localStorage.setItem("token", res.token);
          this.router.navigateByUrl("/home");
          document.getElementById("image").setAttribute("src", "assets/Images/download.jpg");
          localStorage.setItem('email', res.email)
          localStorage.setItem('userName', res.userName)
          localStorage.setItem('imageUrl', res.imageUrl)
          console.log(res);
        // } else {
        //   console.log(res.succeeded)
          // res.errors.forEach(element => {
          //   switch (element.code) {
          //     case "DuplicateUserName":
          //       this.toastr.error(
          //         "User Name is already taken",
          //         "Registeration failed"
          //       );
          //       break;

          //     default:
          //       this.toastr.error(element.description, "Registeration failed");
          //       //Registeration failed.
          //       break;
            // }
          // });
        // }
      },
      err => {
        console.log(err);
        console.log(this.Service.formModel.get("Email").value)
        console.log('There are an erorr')
      }
    );
  }

}
