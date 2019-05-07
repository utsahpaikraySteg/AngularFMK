import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';
import { ConfirmsnackbarComponent } from '../confirmsnackbar/confirmsnackbar.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import {  FileUploader} from 'ng2-file-upload/ng2-file-upload';

//const URL = 'https://mfksoftware.herokuapp.com/posts';
const uri = 'https://mfksoftware.herokuapp.com/uploads';
//const uri = 'http://localhost:3000/uploads';
@Component({
  selector: 'app-raectiveform',
  templateUrl: './raectiveform.component.html',
  styleUrls: ['./raectiveform.component.less'],
  providers: [NgbModalConfig, NgbModal]
})
export class RaectiveformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  model: any = {};
  filepath: any;
  localUrl: any;
  uploader:FileUploader = new FileUploader({url:uri});
  attachmentList:any = [];
  constructor(private formBuilder: FormBuilder, config: NgbModalConfig, private modalService: NgbModal, public modal: NgbActiveModal, private snackBar: MatSnackBar, private http: HttpClient, private data: DataService) {
        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
          this.attachmentList.push(JSON.parse(response));
      }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      instituteName: ['', Validators.required],
      studentStength: ['', Validators.required],
      ContactNumber: ['', Validators.required],
      address: ['', Validators.required],
      PreffredContactTime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', ''],
      uploadfile: ['', '']
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
  
    let user = {
      name: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      instituteName: this.registerForm.value.instituteName,
      studentStength: this.registerForm.value.studentStength,
      ContactNumber: this.registerForm.value.ContactNumber,
      address: this.registerForm.value.address,
      PreffredContactTime: this.registerForm.value.PreffredContactTime,
      query: this.registerForm.value.query,
      uploadfile: this.attachmentList[0]||this.attachmentList[0].uploadname|| null
    }
    this.submitted = true;


    if (this.registerForm.valid) {
      this.data.sendMail("https://mfksoftware.herokuapp.com/sendmail", user).subscribe(
        data => {
          this.snackBar.openFromComponent(ConfirmsnackbarComponent, {
            duration: 1000,
          });
          this.registerForm.reset();
          for(let name in this.registerForm.controls) {
            this.registerForm.controls[name].setErrors(null);
          }
          this.uploader.queue=[];
          console.log(this.uploader);
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
