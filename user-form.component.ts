import { Component, OnInit, Injector } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent
  implements OnInit {
  uploadUrl: string;


  uploadedFiles: any[] = [];
  profileForm: FormGroup;
  items: object[];
  submitted = false;
  activeIndex: number = 0;
  constructor(private formBuilder: FormBuilder,private http: Http) {
    this.uploadUrl = './data/Upload';
  }
  ngOnInit() {

    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.items = [
      { label: 'basic info' },
      { label: 'image' },
      { label: 'last' }
    ];
  }

  get f() { return this.profileForm.controls; }

 
  // upload completed event



  onSubmit() {
    debugger;
    // TODO: Use EventEmitter with form value
    if (this.activeIndex == 0) {
 
      
    }
    else
      if (this.activeIndex == 1) {
          this.activeIndex++;
      }
      else
    if (this.activeIndex == 2) {
      this.submitted = true;

      // stop here if form is invalid
      if (this.profileForm.invalid) {
        return;
      }

      var as = JSON.stringify(this.profileForm.value);
     /* var asd = this.suplierService.addSuplier(this.registerForm.value).subscribe(response => {
        if (response != null) {
          //localStorage.setItem('user', JSON.stringify(response.user));
          alert(response);

        }
      }, error => {
        alert(error.error.errors.password)
      });*/
      //alert( asd);
    }
    else
      this.activeIndex++;
  }
 }
