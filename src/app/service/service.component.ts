import { Component, OnInit } from '@angular/core';
import { services } from '../models/service';
import { ApiService } from '../shared/api.service';
import { MatDialog } from '@angular/material';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  rowsOnPage:number=10;
  services_name: services[];
  id: string;
  service_data: [];
  constructor(private apiservice: ApiService, private dialog: MatDialog) { }

  ngOnInit() {

    this.apiService();
   

  }

  apiService() {
    this.apiservice.apiservices().subscribe((r) => {
      this.services_name = r
      console.log('services', this.services_name);

    });
  }

  addService() {
    // this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(AddServiceComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.service_data = result;
  });
 
  }


  delete(id) {
    this.apiservice.deleteService(id).subscribe((r) => {
      if (r) {
        this.apiService();
      }
    });
  }

}