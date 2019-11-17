import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ParamsInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        // 拦截器克隆原来header并修改后 通过next的handle方法发送到下一步
        const modifiedReq = req.clone({
            setParams: {
                icode: '2333'
            }
        });
        return next.handle(modifiedReq);
    }
}
