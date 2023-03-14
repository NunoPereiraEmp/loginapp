import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { ToastManager } from './toastManager.service';

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


  constructor(private authService: AuthService, private toast: ToastManager) {
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
          this.toast.successToast();
        },
        error => {
          console.error(error);
          this.toast.errorToast();
        }
      );
    }
    else {
      this.toast.warningToast();
    }
  }



  /*LoginUser() {
    if (this.username == "admin" && this.password == "admin") {
      console.log("coisas");

    }

  }*/

}
