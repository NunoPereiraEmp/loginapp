/*
TokenStorageService is a service that is often used in web applications to manage user 
authentication and authorization. The service is responsible for storing and managing user 
authentication tokens, which are typically used to authenticate requests to protected resources 
on a web server.

When a user logs in to a web application, the server generates an authentication token and sends
 it back to the client. The client then stores the token in a secure way, typically using localStorage
  or sessionStorage. When the user makes subsequent requests to protected resources on the server, 
  the client sends the token along with the request. The server can then verify the token and grant
   access to the protected resource if the token is valid.
*/

import { Injectable } from "@angular/core";
const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})

export class TokenStorageService {
    
    //elimina o token ao fazer sign out ?
    //elimina o token do sessionStorage
    //armazenados na sessão atual do navegador serão excluídos, incluindo o token que estava sendo armazenado.
    signOut(): void{
        window.sessionStorage.clear();
    }

    //provavelmente o remove é para eliminar um token aterior ao atual
    public saveToken(token: string):void{
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    //primeiro é chamado este e depois o de cima
    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }


}
