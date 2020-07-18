import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;

  constructor(private authservice:AuthServiceService) { }

  ngOnInit(): void {

    this.username=this.authservice.getUserName();
    console.log('username',this.username);
    

  }

}
