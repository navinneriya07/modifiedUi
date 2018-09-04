import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: any = {};
  error: Object = {};
  loading = false;
  userLoginDetails:User={};

  constructor(private authService: AuthService,
              private router: Router) {}

  @ViewChild('myLoginForm') loginForm: NgForm;
  
  onLogin() {
    this.userLoginDetails.email=this.loginForm.value.email;
    this.userLoginDetails.email=this.loginForm.value.password;
    this.authService.loginUser(this.userLoginDetails).subscribe(
    data => {
      this.data = data;
      console.log("data :"+data);
      //let username = data.currentUserDetails.firstName;
      this.router.navigate(['/dashboard']);
    },error => {
      this.error = error;
      if ((error.status === 401 || error.status === 403)){
        this.loading = false;
      }
    });
    this.loginForm.reset();
  }
}
