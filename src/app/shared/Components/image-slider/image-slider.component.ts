import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Renderer2,
  OnDestroy
} from '@angular/core';

/**
 * ## 轮播图图片属性
 * ### 具有属性
 * 1. imageUrl：图片链接
 * 2. link: 点击跳转地址
 * 3. caption: 图片详情描述
 */
export interface ImageSlider {
  imageUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  /**
   * 模板本地变量批量引用
   * 以第一个模板本地变量为选中
   */
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  /**
   * static 静态配置
   * 如果该模板本地变量引用位于ngFor或者ngIf中则为false，否则即为静态true
   */
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  /**
   * Angular不推荐直接操作DOM，需要通过特定的服务操作对象来提高性能，特定服务`Renderer2`
   * @param rd2 函数对象用来操作dom，此对象具备高性能操作对象
   */

  @Input() sliderHeight = '160px';

  @Input() intervalBySeconds = 2;
  /**
   * 滚动图片选定序号
   */
  selectedIndex = 0;
  /**
   * 定时器容易导致内存泄露需要清理，因此定义变量来整体控制
   */
  intervalId: any;
  constructor(private rd2: Renderer2) { }
  /**
   * 组件`开始初始化` 参数等传输数据绑定，此时视图还未渲染完毕
   */
  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('imageSlider', this.imgs);
    this.imgs.forEach(item => {
      console.log(item);
      this.rd2.setStyle(item.nativeElement, 'height', this.sliderHeight);

      this.intervalId = setInterval(() => {
        this.rd2.setProperty(this.imgSlider.nativeElement,
          'scrollLeft',
          (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
      }, this.intervalBySeconds * 1000);
    });
  }
  /**
   * 防止数组越界处理数组函数
   * @param idx 序列号
   */
  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length;
  }


  /**
   * 滚动处理
   * @param ev 浏览器对某种事件响应
   */
  handleScroll(ev): void {
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
}
