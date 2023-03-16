import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { User } from '../api/User';
import { AuthService } from '../services/auth/auth.service';
import { UserDataService } from '../user-data.service';
import { ToastManager } from './toastManager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
 
  username: string = "";
  password: string = "";
  user:User = {
    email: '',
    username: '',
    id_brand: 0,
    active: 0,
    permissions: undefined,
  };
  //subscription: Subscription;
  data: object = {};


  constructor(private authService: AuthService, private toast: ToastManager, private router: Router, private userService: UserDataService) {
  }



  ngOnDestroy(): void {
    //this.subscription = 
  }

  ngOnInit() {

  }
  getUserData(user:User, data: any) : User {
    user.username = data.User.username;
    user.email = data.User.email;
    user.id_user = data.User.id_user;
    user.permissions = data.User.permissions;
    user.id_brand = data.User.id_brand;
    this.userService.setCurrentUser(user);
    return user;
  }

  onSubmit() {
    if (typeof this.username != 'undefined' && this.username && typeof this.password != 'undefined' && this.password) {
      this.data = { 'username': this.username, 'password': this.password };
      this.authService.signIn(this.data).subscribe(
        response => {
          console.log(response);
          this.toast.successToast();
          this.user= this.getUserData( this.user,response.body);
          this.router.navigate(['/user',this.user.id_user]);
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
