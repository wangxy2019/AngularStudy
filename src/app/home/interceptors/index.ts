/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ParamsInterceptor } from './params.interceptors';
import { NotificationInterceptor } from './notification.interceptors';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true },
];
