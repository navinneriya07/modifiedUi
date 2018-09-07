import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/User';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  data:any={};
  error: Object = {};
  loading = false;
  userForgotPassDetails:User={};

  constructor(private authService: AuthService,
    private router: Router,
    /* private alertService: AlertService */) {}

  @ViewChild('myRecoverForm') recoverForm: NgForm;

  onForgotPassword(){
   
    this.userForgotPassDetails.email= this.recoverForm.value.email;
    
    this.authService.forgetPasswordUser(this.userForgotPassDetails).subscribe(
      data => {
       // this.alertService.success(data.message, true);
       this.data = data;
       console.log("data :"+data.message);
      },error => {
          this.error = error;
          if ((error.status === false)){
           // this.alertService.error(error.message, false);
            this.loading = false;
          }
      });
      this.recoverForm.reset();
  } 

}
