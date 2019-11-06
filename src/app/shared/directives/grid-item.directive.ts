import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

/**
 * ## 指令
 * `[appGridItem]` 由[]包裹表示属性
 * @description：指令本身没有模板需要寄宿在模板上成为模板的属性
 */
@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
  /**
   * 通过hostBinding将宿主模板的样式和指令属性绑定，
   * 通过指令设置宿主模板样式
   * @param: 接受一个参数,宿主style的css样式属性
   */
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';


  /**
   * 我们要操作html模板需要两个工具
   * ElementRef => Angular中的html模板别称
   * Renderer2
   */
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    /*     this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
        this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
        this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
        this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem'); */
  }
}
