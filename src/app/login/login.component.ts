import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
  });
  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.form.value);
    
    this.service.getloginfromapi(this.form.value.email,this.form.value.password).subscribe(result =>{
      console.log('result',result);
      if(result){
        this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['/']);
      }
    });
  }


}
