import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/ViewModel/sponsor';
import { Router } from '@angular/router';
import { SponsorService } from 'src/app/shared/sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  imageUrl: string =null;
  id:number=0;
  constructor(private SponsorService:SponsorService,private router: Router) { }
  Sponsorlist:Sponsor[];
  ngOnInit(): void {
    this.SponsorService.getAllImageSponsor().subscribe(
      (res)=>{
        this.Sponsorlist=res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  fileToUpload: File = null;
  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(this.fileToUpload+"______"+this.fileToUpload.name)
  }
  PushZone()
  {
    console.log("this push func")
   this.SponsorService.postSponsor(this.fileToUpload).subscribe();
  }
  DeleteConfirm(ID: number) {
    if(confirm("Are you sure to delete ")) {
      this.SponsorService.DeleteSponsor(ID).subscribe(()=>this.router.navigate(['/admin/Sponsor']));
    }
  }
}
