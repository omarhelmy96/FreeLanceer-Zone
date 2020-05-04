import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/shared/zone.service';
import { Zone } from 'src/app/ViewModel/zone';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zone-edit',
  templateUrl: './zone-edit.component.html',
  styleUrls: ['./zone-edit.component.css']
})
export class ZoneEditComponent implements OnInit {
  imageUrl: string ;
  ThisZone:Zone;
  ThisZoneID:number;
  constructor(private ZoneServices:ZoneService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params) => {
      this.ThisZoneID = params['Id'];
      console.log(this.ThisZoneID);
      this.ZoneServices.getZone(this.ThisZoneID).subscribe((data)=>{
      
      this.ThisZone=data;
        
        this.imageUrl='http://localhost:2687/Images/'+data.imageUrl;
        console.log(this.ThisZone);
      });
    });
    
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
  SaveEdits()
  {
   console.log(this.ThisZone.name);
   this.ZoneServices.PutZone(this.ThisZone.id,this.ThisZone.name,this.ThisZone.capacity,this.ThisZone.place,this.ThisZone.available,this.ThisZone.numberOfRooms,this.fileToUpload).subscribe();
  }
}
