import { environment } from 'src/app/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

const AUTH_API = environment.url;
//Essa definição é frequentemente usada em solicitações HTTP para especificar os
//cabeçalhos da requisição, como o tipo de conteúdo (content type), a codificação (encoding)
//ou outros metadados relevantes para a requisição.
/*
 O cabeçalho especificado é 'Content-type': 'application/json', que indica que o conteúdo 
 sendo enviado na requisição é um JSON. Isso é útil para o servidor que irá receber a requisição,
  pois ele pode tratar o conteúdo adequadamente.
  cabeçalhos são informações adicionais que podem ser enviadas juntamente com a requisição, 
  como por exemplo o tipo de conteúdo que está sendo enviado ou o tipo de autenticação que está 
  sendo utilizado.
  
  */

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};
/*
Quando providedIn é definido como 'root', isso significa que a instância da classe será 
criada como um singleton e disponibilizada em todo o aplicativo, permitindo que ela seja injetada em
 qualquer componente

 Por exemplo, se uma classe de serviço for definida como @Injectable({ providedIn: 'root' }), ~
 ela será automaticamente disponibilizada em todo o aplicativo, permitindo que qualquer componente 
 ou outra classe a injete em seu construtor.
*/
@Injectable({
  providedIn: 'root',
})
// HttpClient just a Api for server communication
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    console.log(`Current environment is production: ${environment.production}`);
    console.log(`Application is running in development mode: ${isDevMode()}`);
  }

  public async requestGET(request: any) {
    console.log('inside request gettttttttttttttt');
    let data = await this.http.get<any>(request).toPromise();
    return data;
  }

  requestPOST(request: any) {
    console.log('inside request Post');
    let body = request.body;
    if (body != null) {
      body = {};
    }
    return this.http.post<any>(request.url, body);
  }

  //sign in na página de login, post
  signIn(data: Object) {
    console.log('Inside sign in');
    return this.http.post(AUTH_API + 'users/login', { data: data });
  }

  //quando se dá o log out
  signOut(data: Object) {
    console.log('Inside log out');
    return this.http.post<any>(AUTH_API + 'users/logout', {});
  }
}
