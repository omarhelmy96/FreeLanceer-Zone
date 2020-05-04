import { User } from './../ViewModel/user';
import { Injectable } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

    readonly BaseURI = "http://localhost:2687/api"
    
    result: User;

    formModel = this.fb.group({
        // UserName: ["", Validators.required],
        ImageUrl: [""],
        Email: ["", [Validators.email, Validators.required]],
        FName: [""],
        LName: [""],
        PhoneNumber: ["", Validators.pattern("^01[0-2||5]{1}[0-9]{8}")],
        Role: ["", Validators.required],
        Passwords: this.fb.group(
        {
            Password: ["", [Validators.required, Validators.pattern("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$")]],
            ConfirmPassword: ["", Validators.required]
        },
        { validator: this.comparePasswords }
        )
    });

    loginformModel = this.fb.group({
      Email: [""],
      Password: [""]
    })

    comparePasswords(fb: FormGroup) {
        let ConfirmPswdCtrl = fb.get("ConfirmPassword");
        let PswdCtrl = fb.get("Password");

        if (
        ConfirmPswdCtrl.errors == null ||
        "passwordMismatch" in ConfirmPswdCtrl.errors
        ) {
        if (PswdCtrl.value != ConfirmPswdCtrl.value) {
            ConfirmPswdCtrl.setErrors({ passwordMismatch: true });
        } else {
            ConfirmPswdCtrl.setErrors(null);
        }
        }
    }

    register() {
        var body = {
            // UserName : this.formModel.value.UserName,
            Image: this.formModel.value.Image,
            Email : this.formModel.value.Email,
            FName: this.formModel.value.FName,
            LName: this.formModel.value.LName,
            Phone: this.formModel.value.PhoneNumber,
            Role: this.formModel.value.Role,
            Password : this.formModel.value.Passwords.Password,
            ConfirmPassword : this.formModel.value.Passwords.ConfirmPassword,
        };

        var formData: FormData = new FormData();
        formData.append("ImageUrl", this.formModel.value.ImageUrl)
        formData.append('Email', this.formModel.value.Email);
        formData.append('FName', this.formModel.value.FName);
        formData.append('LName', this.formModel.value.LName);
        formData.append('PhoneNumber', this.formModel.value.PhoneNumber);
        formData.append('Role', this.formModel.value.Role);
        formData.append('Password', this.formModel.value.Passwords.Password);
        formData.append('ConfirmPassword', this.formModel.value.Passwords.ConfirmPassword);
        
        return this.http.post(`${this.BaseURI}/Account/register`,  formData);
    }

    login() {
      var loginBody = {
        Email: this.loginformModel.value.Email,
        Password: this.loginformModel.value.Password
      }

      return this.http.post(`${this.BaseURI}/Account/login`,  loginBody);
    }

    getUserProfile() {

        return this.http.get(`${this.BaseURI}/UserProfile`);
    }

    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
          if (userRole == element) {
            isMatch = true;
            return false;
          }
        });
        return isMatch;
      }

}
