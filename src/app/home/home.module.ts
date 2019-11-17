import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ParentComponent,
  ChildComponent
} from './components';
import { HomeService, token } from './services';

import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  providers: [
    HomeService,
    {
      provide: token,
      useValue: 'http:localhost:4200'
    },
    httpInterceptorProviders
  ]
})
export class HomeModule { }
