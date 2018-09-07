import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent{

  data:any={};
  error: Object = {};
  loading = false;
  userResetPassDetails:User={};
  @ViewChild('myResetPasswordForm') resetForm: NgForm;

  constructor(private authService: AuthService,
    private router: Router,
    /* private alertService: AlertService */) {}

  onReset(){
    this.userResetPassDetails.password=this.resetForm.value.password
    
    this.authService.resetPasswordUser(this.userResetPassDetails).subscribe(
      data => {
       this.data=data;
       console.log(data.message); 
      },error => {
          this.error = error;
          if ((error.status === false)){
            //this.alertService.error(error.message, false);
            this.loading = false;
          }
      }); 
      this.resetForm.reset();
  }
}
