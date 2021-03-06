import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status >= 200 && event.status < 300) {
                    console.log('假装弹出 toast， 请求成功');
                }
            })
        );
    }
}
