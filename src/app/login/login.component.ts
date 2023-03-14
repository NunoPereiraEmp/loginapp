import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string = "";
  password: string = "";
  //subscription: Subscription;
  data: object = {};


  constructor(private authService: AuthService, private toast: NgToastService) {
  }



  ngOnDestroy(): void {
    //this.subscription = 
  }

  ngOnInit() {

  }

  onSubmit() {
    if (typeof this.username != 'undefined' && this.username && typeof this.password != 'undefined' && this.password) {
      this.data = { 'username': this.username, 'password': this.password };
      this.authService.signIn(this.data).subscribe(
        response => {
          console.log(response);
          this.successToast();
        },
        error => {
          console.error(error);
          this.errorToast();
        }
      );

    }
    else {
      this.warningToast();
    }
  }

  errorToast() {
    this.toast.error({ detail: 'Login failed, your password or username are incorrect', summary: '', duration: 2000 });
    console.log("insidde toast");
  }

  successToast() {
    this.toast.success({ detail: 'Login success, your password and username are correct', summary: '', duration: 2000 });
  }

  warningToast() {
    this.toast.warning({ detail: 'Login failed, insert your password or username', summary: '', duration: 2000 });
  }

  /*LoginUser() {
    if (this.username == "admin" && this.password == "admin") {
      console.log("coisas");

    }

  }*/

}
