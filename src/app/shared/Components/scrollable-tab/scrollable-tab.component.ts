import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

/**
 * ## 导航按钮对象 接口
 * - title: 文本内容
 * - link: 接口跳转地址
 */
export interface TopMenu {
  id: number;
  title: string;
  link?: string;
}
/**
 * ## 滚动导航组件配置参数接口对象
 * - background: 组件背景颜色
 * - titleActiveColor: 文字激活颜色
 * - titleColor: 文字默认颜色
 * - indicatorColor: 激活指示器颜色
 */
export interface Options {
  backgroundColor?: string;
  titleActiveColor?: string;
  titleColor?: string;
  indicatorColor?: string;
}


/**
 * ## 滚动导航组件类
 */
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit,
  OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // 初始化导航选中序号
  public selectIndex = -1;
  // 初始化默认导航样式
  public tabOpt: Options = {
    backgroundColor: '#fff',
    titleActiveColor: 'Orange',
    titleColor: '#333',
    indicatorColor: 'green',
  };

  /**
   * ## 数据传入
   * menus 菜单导航一维数组
   * TopMenu类型数组集合
   */
  @Input() menus: TopMenu[] = [];
  // @Input() Options: Options = {};


  /**
   * 滚动导航组件配置项
   *
   * 1. 采用set/get重置拦截数据
   * 2. 参数类型: Options
   */
  @Input()
  set Options(data: Options) {
    this.tabOpt = Object.assign(this.tabOpt, data);
  }
  get Options() {
    return this.tabOpt;
  }

  /**
   * 事件发射器 EventEmitter函数对象
   *
   * 导航选中后可通过该对象emit函数属性发射值
   *
   * 组件上将通过对外`(tabSelect)="父组件监听函数接受数据，函数参数$event"`
   */
  @Output() tabSelected = new EventEmitter();
  // 日志变更记录数组
  private changeLog: any[] = [];

  constructor() { }
  /**
   *  在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
   *  有的属性`依赖传入数据`这些属性初始化应该在init里。
   *  在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
   *  在第一轮 ngOnChanges() 完成之后调用，只调用一次。
   */
  ngOnInit() {
  }
  /**
   * 在组件的`@Input()`变化时被调用
   * @param changes 索引对象 SimpleChanges类型的数据
   * 此生命周期与ngDoCheck职责相近，因此只存在一个即可
   *
   *  当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges
   *  对象在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。
   */
  ngOnChanges(changes: SimpleChanges): void {
    // 监听传入 数据是否改变 改变则触发
    console.log(changes);
    const log: string[] = [];
    // 遍历changes对象key，不包含原型链中数据
    for (const propName of Object.keys(changes)) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        // 设定初始化值
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        // 设定拦截后的值的修正
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    // 一次完整的所有输入属性变更记录
    this.changeLog.push(log.join(', '));
  }
  /**
   * 脏值检测，任何值的变化讲导致脏值检测
   * 此生命周期与ngOnChanges职责相近，因此只存在一个即可
   */
  /* ngDoCheck(): void {
      // Called every time that the input properties of a component or a directive are checked.
      // Use it to extend change detection by performing a custom check.
      // Add 'implements DoCheck' to the class.
    console.log('脏值检测')
  } */

  /**
   * 内容投影组件初始化
   * 父组件标签内部嵌套内容
   * 子组件`<ng-content></ng-content>`用来接收投影内容显示位置 ===> 占位符
   */
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('组件内容投影初始化完成');
  }
  /**
   * 内容投影组件脏值检测
   * 多次调用，十分频繁
   */
  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('组件内容投影脏值检测');
  }

  /**
   * 组件视图初始化
   * 视图：整个组件加内部投影初始化完成
   */
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('组件视图初始化完成');
  }
  /**
   * 组件视图脏检查
   * 多次调用,十分频繁
   */
  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log('组件视图脏值检测');
  }
  /**
   * 组件销毁 主动清理
   * ### 在这儿反订阅可观察对象和分离事件处理器
   * - 订阅退订，
   * - 计时器清除。
   */
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('组件销毁退订开始计时器清除');
  }

  /**
   * 处理滚动导航被选中
   * @param index 被选中的导航数组序号
   */
  public handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
}
