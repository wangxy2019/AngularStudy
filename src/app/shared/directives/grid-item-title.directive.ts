import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  /**
   * 装饰器或者注解可能有一个或多个修饰一个修饰一个变量
   */
  @HostBinding('style.font-size') @Input() appGridItemTitle = '3rem';
  @HostBinding('style.grid-areas') area = 'title';

  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.rd2.setStyle(this.elr.nativeElement, 'grid-areas', 'title');
    /* this.setStyle('grid-area', 'title');
    this.setStyle('font-size', this.appGridItemTitle); */
  }

  private setStyle(styleName: string, styleValue: string) {
    this.rd2.setStyle(this.elr.nativeElement, styleName, styleValue);
  }

}
