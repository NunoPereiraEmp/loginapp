import { Injectable } from "@angular/core";
import { User } from "./api/User";

@Injectable({ providedIn: 'root' })
export class UserDataService{
    private currentUser!:User;

    setCurrentUser(user:User){
        this.currentUser = user;
    }

    getCurrentUser(){
        return this.currentUser;
    }

}