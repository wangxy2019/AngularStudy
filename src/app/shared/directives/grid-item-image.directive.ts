import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {

  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover';
  @Input() link = null;
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.rd2.setStyle(this.elr.nativeElement, 'grid-areas', 'image');
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode);

  }
  /**
   * @description: `@HostListener`装饰器,设定监听事件
   * @param: 'click' 参数一: dom触发事件
   * @param: [] 数组存放函数参数，一般传入$event.target
   */
  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log('指令触发事件：', ev);
    console.log('获取的link', this.link);
  }
}
