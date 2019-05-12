import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';
import { ConfirmsnackbarComponent } from '../confirmsnackbar/confirmsnackbar.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import {  FileUploader} from 'ng2-file-upload/ng2-file-upload';


//const uri = 'https://www.mfksoftware.com/uploads';
const uri = 'https://mfksoftware.herokuapp.com/uploads';
@Component({
  selector: 'app-carrier-form',
  templateUrl: './carrier-form.component.html',
  styleUrls: ['./carrier-form.component.less']
})
export class CarrierFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  filepath: any;
  uploader:FileUploader = new FileUploader({url:uri});
  attachmentList:any = [];
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, public modal: NgbActiveModal, private snackBar: MatSnackBar, private http: HttpClient, private data: DataService) {
        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
          this.attachmentList.push(JSON.parse(response));
      }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      ContactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      uploadfile: ['', ''],
      position:['','']
    });
  }
 
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    let user = {
      name: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      ContactNumber: this.registerForm.value.ContactNumber,
      position:this.registerForm.value.position,
      uploadfile: this.attachmentList[0].uploadname|| null
    }
    this.submitted = true;


    if (this.registerForm.valid) {
      this.data.sendMailwithattachment("https://mfksoftware.herokuapp.com/sendMailwithattachment", user).subscribe(
        data => {
          this.snackBar.openFromComponent(ConfirmsnackbarComponent, {
            duration: 1000,
          });
          this.registerForm.reset();
          for(let name in this.registerForm.controls) {
            this.registerForm.controls[name].setErrors(null);
          }
          this.uploader.queue=[];
        },
        err => {
          console.log(err);
        }
      );
    }

    if (this.registerForm.invalid) {
      return;
    }
  }

}
