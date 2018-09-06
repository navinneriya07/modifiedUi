import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService,
              private router: Router,
              /* private alertService: AlertService */) {}

  data: Object = {};
  userDetails:User={};
  loading = false;

  @ViewChild('myRegisterForm') registerForm: NgForm;

  ngOnInit() {
    
  }

  onRegister() {
    this.userDetails.fName=this.registerForm.value.fname,
    this.userDetails.lName=this.registerForm.value.lname,
    this.userDetails.email=this.registerForm.value.email,
    this.userDetails.password=this.registerForm.value.password,
    this.userDetails.address=this.registerForm.value.address,
    this.userDetails.mobilenumber=this.registerForm.value.mobilenumber,
    this.userDetails.roles=[{"role":"USER"}]
    
    this.authService.registerUser(this.userDetails).subscribe(
      data => {
          this.data = data;
          let message = data.message;
          let status = data.status;
          if(status === 'success'){
             console.log(data.message);
          }else {
             console.log(data.message);
          }
        //  this.alertService.success(data.message, true);
          this.router.navigate(['/']);
      }, 
      error => {
       // this.alertService.error(error);
        this.loading = false;
          //console.log(error);
      });
    this.registerForm.reset();
  }

}
