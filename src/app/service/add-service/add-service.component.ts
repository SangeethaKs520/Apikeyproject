import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  public form:FormGroup;
  constructor(private formbuilder:FormBuilder,
    private dialogRef:MatDialogRef<AddServiceComponent>,
    private addService:ApiService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]]
    });
  }

  close():void{
    this.dialogRef.close();
  }

  onSave(){
    this.dialogRef.close({data:this.form.value });
    this.addService.addApiServices(this.form.value).subscribe((r) => {
      console.log('ppppp',r);
    });

    //   if (r)
    //     this.apiService();
    // });
  }

}
