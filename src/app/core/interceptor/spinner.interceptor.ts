import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { SpinnerService } from "../services/spinner.service";


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(()=> {
                setTimeout(()=>{ this.spinnerService.hide() }, 200)
            })
        );
    }
    
}