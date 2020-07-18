import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { tenantId } from '../models/tenant';
import { services } from '../models/service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { keydetails } from '../models/keydetails';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
all_details:services[];
service_name=[];
rowsOnPage: number = 3;
public Newform:FormGroup;
  create_new_api: boolean;
  newapi:keydetails;
  token=[];
  newtoken: boolean;
  tenantIds=[];
  tenants=[];
  tenantId: keydetails;
  constructor(private apiservice:ApiService,private formbuilder:FormBuilder) { }
  ngOnInit(): void {
    this.Newform = this.formbuilder.group({
      tenantId:["", [Validators.required]],
      email:["", [Validators.required]],
      serviceId:["", [Validators.required]]
    });

    

this.apiservice.apiservices().subscribe((r)=>{
  this.all_details=r
  for(let i=0;i<this.all_details.length;i++){
   this.service_name.push(this.all_details[i]['name'])
   console.log('all keys',this.service_name);
  }
}) ;
this.tenantIdDetails();
  

}

onClick(){
  this.create_new_api=true;
}

OnSubmit(){
  console.log('create new',this.Newform.value);
  this.apiservice.createNewApiKey(this.Newform.value).subscribe((r)=>{
    this.newapi=r;
      if(this.newapi){
        this.token.push(this.newapi['apiKey']);
        console.log('tokenkey',this.token);
         this.newtoken=true;
        
      }
  });
}

// onSelect(tenantId:string) {
//     this.apiservice.getDhiApiKeyForGivenTenant(tenantId).subscribe(resp => {
//         this.tenantIds.push(resp);
//     });
//   }

tenantIdDetails(){
  this.apiservice.apiServiceDetails().subscribe((data)=>{
    this.tenantIds=data;
    for(let i=0;i<this.tenantIds.length;i++)
    this.tenants.push(this.tenantIds[i]['tenantId']);
    console.log('mmmmmmm',this.tenants);
    console.log('tenants',this.tenantIds);
  })
}

cancle(){
  this.create_new_api=false;
}
reset(){
  this.Newform.reset();
}

deactivate(id: string) {
  const status ='INACTIVE';
    this.apiservice.updateStatus(id, status).subscribe(resp => {
      if (resp) {
        this.tenantIdDetails();
      }
    });
  
}


}