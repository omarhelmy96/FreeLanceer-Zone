import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/ViewModel/zone';
import { ZoneService } from 'src/app/shared/zone.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {
  ThisZone:Zone;
  id:number=0;
  constructor(private ZoneServices:ZoneService) { }

  ngOnInit(): void {
  }
  PushZone(Name:string,Capacity:number,Avalible:number,Place:string,numberOfRooms:number)
  {
   
   this.ZoneServices.postZone(this.id,Name,Capacity,Place,Avalible,numberOfRooms,this.fileToUpload).subscribe();
  
  }
  fileToUpload: File = null;
  imageUrl: string = null;
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
}
