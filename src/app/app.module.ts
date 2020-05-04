import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './HeaderComponent/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MeetOurFreeLancersComponent } from './meet-our-free-lancers/meet-our-free-lancers.component';
import { FreelancersOpinionsComponent } from './freelancers-opinions/freelancers-opinions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MaharaTechVideosComponent } from './mahara-tech-videos/mahara-tech-videos.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { ZonesComponent } from './zones/zones.component';


@NgModule({
  declarations: [AppComponent,
     HomeComponent,
       ForbiddenComponent,
        RegisterComponent,
         LoginComponent,
         HeaderComponent,
         BannerComponent,
         AboutUsComponent,
         MeetOurFreeLancersComponent,
         FreelancersOpinionsComponent,
         StatisticsComponent,
         MaharaTechVideosComponent,
         SponsorsComponent,
         FooterComponent,
         ZonesComponent,
         
         
        ],
  imports: [BrowserModule,
                 AppRoutingModule,
                 ReactiveFormsModule,
                 FormsModule,
                 HttpClientModule,
                 BrowserAnimationsModule,
                 ToastrModule.forRoot({
                  progressBar: true
                 }
                 ), BrowserAnimationsModule,
                 CarouselModule 
                 
    ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
