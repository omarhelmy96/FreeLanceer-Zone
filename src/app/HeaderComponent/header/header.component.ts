import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string
  userName: string;
  imageUrl: string;
  role: string;
  constructor( private userService: UserService,private router: Router
    ) { 
      this.email = localStorage.getItem('email')
     this.userName = localStorage.getItem('userName')
     this.role=localStorage.getItem('role');
     this.imageUrl = `${environment.host}/Images/${localStorage.getItem('imageUrl')}`
    }

  ngOnInit(): void {
    
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    this.router.navigateByUrl("/home");
  }
}
