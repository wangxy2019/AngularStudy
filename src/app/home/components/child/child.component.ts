import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  NgZone,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy
} from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private TITLE;

  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;

  public get title(): string {
    console.log('脏值检测');

    return this.TITLE;
  }
  constructor(
    private ngZone: NgZone,
    private rd: Renderer2
  ) {
    this.TITLE = 'hi';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.rd.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans')
        );
      }, 100);
    });
  }

}
