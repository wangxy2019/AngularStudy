import { Component, OnInit, AfterViewInit } from '@angular/core';

import { interval } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'App';

  createO() {
    const d$ = interval(1000);
    const b$ = d$.pipe(
      startWith(5),
      scan(time => time - 1)
    );
    b$.subscribe(item => console.log(item));
  }

  ngOnInit() {

  }

}
