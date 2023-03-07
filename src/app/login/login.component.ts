import { Component, OnDestroy, OnInit } from '@angular/core';
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


  constructor(private authService: AuthService) { 
  }



  ngOnDestroy(): void {
    //this.subscription = 
  }

  ngOnInit() {

  }

  onSubmit(){
    if(typeof this.username != 'undefined' && this.username && typeof this.password !='undefined' && this.password){
      this.data={ 'username': this.username, 'password': this.password};
      this.authService.signIn(this.data).subscribe(
        response=>console.log(response),
        error=>console.error(error),
      );
      


    }
  }

  /*LoginUser() {
    if (this.username == "admin" && this.password == "admin") {
      console.log("coisas");

    }

  }*/

}
