import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Route, Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { TokenStorageService } from "../token-storage/token-storage.service";
const TOKEN_HEADER_KEY = 'Authorization';

export class AuthInterceptor implements HttpInterceptor {

    private isRefreshing = false;

    constructor(
        private tokenService: TokenStorageService,
        private authService: AuthService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
        let authReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            authReq = this.addTokenHeader(req, token);
        }

        return next.handle(authReq).pipe(catchError(error=>{
            if(error.status===403){
                this.handle403Forbidden(authReq, next, error);
            }
            else if(error.status===401){
                this.handle401Error();

            }
            return throwError(error);
        })
        );
    }
    handle401Error() {
        this.tokenService.signOut();
      //  this.router.navigate(['login']);
    }


    private addTokenHeader(request: HttpRequest<any>, token: string) {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token) });
    }


    private handle403Forbidden(request: HttpRequest<any>, next:HttpHandler, error:any){
        let data= error.error.split(':');
        this.tokenService.saveToken(data[1]);
        request=this.addTokenHeader(request, data[1]);
        
        if(request.method=="GET"){
            this.authService.requestGET(request);
        }
        if (request.method=="POST") {
            this.authService.requestPOST(request);
        }
        return next.handle(request);

    }
}
