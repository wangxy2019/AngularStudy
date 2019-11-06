# Angular820191006

## 大佬讲课
```
翻译完官方文档就差不多了，然后就是在实践项目中体会一些应用场景

有后端基础的话，达到熟练其实是很容易的，因为高层设计思想都是互通的。

入门之后，阅读风格指南，找到和自己的现有习惯不同的地方，思考为什么，尽量把自己的实践靠过去

入门之后，没有项目压力了，就要尽快把官方文档通读一遍，至少遇到哪个问题知道去哪一章找。

然后就是学会用模型驱动的方式去理解需求

四象限带交互的图形编辑器

建立业务模型，比如四象限工具的业务模型就是一个 “条目、价值、代价” 的列表。

把它映射到视图模型中，就是 “条目、横坐标、纵坐标” 的列表

因为价值、代价这些都是来自需求，所以称其为业务模型，而横坐标纵坐标这些都是只属于视图层的概念，所以称为视图模型

我们写的代码其实就是在处理业务模型和视图模型之间的关联。

而模板只是把视图模型用 SVG 表示出来而已。


在水平比较低的情况下，深入去学，掌握它的每一个细节，思考这个设计背后的原理。这个阶段专心学一门技术就可以。

等到水平较高了，再学习相关的技术

但是第一个阶段也仍然要放开看书，不要局限于前端，特别是在软件工程等方面下点功夫，这是很多程序员容易忽视的地方，也就容易形成你的竞争力。

精通 Angular/React/Vue 之一，阅读《代码整洁之道》，阅读敏捷相关的书籍，有机会就去实践，然后读一些关于为人处世方面的著作，让自己的心态保持开放。

```


## 版本
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## 系统学习Angular

> 创建组件： `ng g c components/MyComponentName`
在组件内新建文件index.ts 导出组件所有内容以减少路径引用每级文件都有
使用index.ts有两个好处
1. 缩短引用的路径
2. 更好的封装，目录内部结构的变化不会影响外部

-----------------------------------------
> 指令ngFor循环 指令ngIf
```
<div *ngIf="条件判断" else elseContent>
条件判断为真时显示
</div>
<ng-template #elseContent>
条件为假时显示
</ng-template>
```
@Input 父组件向子组件传入数据的标识符
@Output 子组件向父组件传入数据的标识符
new EventEmitter() 事件发射器 为对象提供emit事件

-----------------------------------------
> 样式绑定

样式绑定三种绑定方式

```
[class.className] = "表达式"
class.className对于单个样式的条件绑定最合适

[ngClass] = {'One': true, 'Two': true,'Three': false}
ngClass 是自由度和扩展性最强的样式绑定方式

[ngStyle] = "{'color': someColor, 'font-size': fontSize}"
ngStyle 由于是嵌入式样式，会覆盖掉其他样式，慎用

```

------------------------------------------

> 组件的生命周期

```
// 声明周期是可选的 构造函数必有 
constructor 构造函数永远首先被调用
ngOnChanges 输入属性变化时被调用
ngOnInit    组件初始化完成时被调用
ngDoCheck   脏值检测时调用

ngAfterContentInit    当内容投影ng-content完成时调用
ngAfterContentChecked Angular检测投影内容时调用(多次)
ngAfterViewInit       当组件视图(子视图)初始化完成时
ngAfterVIewChecked    当检查视图变化时(多次)

ngOnDestory           当组件销毁时
```

> @Input()输入值尽量使用get/set拦截，可以少写生命周期
```
  // 初始化时先声明内部属性 tabOpt
  tabOpt: Options = {};
  // 输入属性
  @Input()
  set Options(data: Options) {
    this.tabOpt = Object.assign(this.tabOpt, data);
  }
  get Options() {
    return this.tabOpt;
  }
```

> 模板在组件类中的引用
```
<div #helloDiv></div>
// `#`后面是给模板或DOM元素起一个引用名字，变可以在组件类或模板中进行，注意唯一

exportt class AppComponent {
  @ViewChild('helloDiv') helloDivRef: ElementRef;
  // @ViewChild是一个选择器，用来查找要引用的DOM元素或者组件
  // ElementRef 是DOM元素的一个包装类
  // 因为DOM元素不是Angular中的类，所以用一个包装类在Angular中使用和表示其他类型
  // helloDiv是模板引用变量名，helloDivRef是类中别名

}

```

## 双向绑定
```
<input [value]="username" (input)="username = $event.target.value">
```
- 属性绑定 `[value] = "username"` -- 绑定 `username` 值到 `value` 中
- 事件绑定 `(click) = "表达式"` -- 绑定表达式到 `click` 事件上
- `username = $event.target.value` -- 在input事件触发时执行
- `$event` -- 表达式， 提供事件的数据

> ngModel 
```
// 1. 依赖FormsModule中提供的指令 
// 2. 使用[(ngModel)] = "变量" 形式进行双向绑定
// 3. 其实是一个语法糖
// 4. [(ngModel)] = "username" (ngModelChange)="username = $event"
```

## 什么是模块

`模块就是提供相对独立功能的一组代码`
- 模块的组成部分可以有： 组件、服务、指令、管道等。
- 从某种角度，它就像一个小型应用。
```
1. declarations 数组：模块拥有的组件、指令或管道。【注意】每个组件、指令、管道只能在一个模块中声明。
2. providers 数组： 模块中需要使用的服务
3. exports 数组：暴露给其他模块使用的组件、指令或管道等。
4. imports 数组： 导入本模块需要的依赖模块 【注意】仅是模块。
```

## 模块的使用标准
> 导入其它模块时，需要知道使用该模块的目的

- 如果是组件，那么需要在`每一个`需要`模块`中进行导入
- 如果是服务，那么一般来是在`根模块`中导入`一次`即可 `服务依赖注入`

> 需要在每个需要的模块中进行导入的

- CommonModule： 提供绑定，`*ngIf` 和 `*ngFor`等基础指令，基本每个模块都需要
- FormsModule/ReactiveFormsModule: 表单模块需要在每个需要的模块导入
- 提供组件、指令或管道的模块 需要在每个需要的模块导入

> 只在根模块导入一次的
- HttpClientModule/BrowserAnimationsModule/NoopAnimationsModule
- 只提供服务的模块

***注意***
> 模块只会被导入一次，重复导入不存在。
> Angular 不允许模块之间出现循环依赖

## 如何有效的组织模块

- 共享模块 `SharedModule`
 1. 公用组件
 2. 公用指令
 3. 公用管道
- 根模块
  1. 根路由模块
  2. 根组件
  3. 公用服务
- 子模块
  1. 子模块路由模块
  2. 组件
  3. 服务
  4. 管道
  5. 指令

## 命令
> 创建模块携带路由 `ng g m 模块名 --routing`


## 什么是注解(注解)

> 装饰器/注解就是一个函数 但是它是一个返回函数的函数。
它是TS特性，非Angular独有。

## 指令
1. 组件 带模板的指令
2. 结构型指令 改变宿主文档结构 eg: `ngIf`, `ngFor`, `ngSwitch`
3. 属性型指令 改变宿主行为 eg: `ngClass`, `ngStyle`, `ngModel`

**[注意]指令本身没有模板需要寄宿在模板上成为模板的属性**

> 指令Vs组件
>> 组件：自定义HTML标签，外部调用者无法改变组件内部结构
>> 指令：自定义属性，不在意使用在哪，但是改变使用行为

> 指令的样式和事件绑定

- 指令没有模板，指令要寄宿在一个元素之上- 宿主(Host)
- `@HostBinding` [注解]: 绑定宿主的属性或者样式
- `@HostListener` [注解]: 绑定发生在宿主身上的事件

> 组件的样式中也可以使用:host 这样一个伪类元素 生效影响的是当前的宿主组件

## 组件嵌套

> 组件嵌套是不可避免的
- 过渡嵌套会陷入复杂和冗余

> 组件本身和外界的交互
- 通过`@Input` 和 `@Output`

> 避免组件嵌套导致冗余数据和事件传递
- 内容投影
- 路由
- 指令
- 服务

## 投影组件
> `ng-content` 是什么
- 简单回答：动态内容

> 表现形式
- <ng-content select="样式类/html标签/指令"></ng-content>

> 使用场景
- 动态内容
- 容器组件

> 组件会固化模板，设定固定结构，但是你可以通过输入属性去设定效果或行为，但是有限制。组件特点规范开发，既然做成组件，大家就要风格一致，行为一致。

> 内容投影可以让你自由发挥，但是也可以通过select去限制发挥，控制显示内容。常用场景：容器性组件。

## 路由

> 路由： 本质上是切换视图的一种机制

> 路由定义：数组，内部对象[路径、组件、子组件] =》树形结构

> 路由 懒加载

> 使用：modules中导入路由对象 [.forRoot]导入到根路由【根模块中】 [.forChild]导入子路由【子模块中】

> 路径参数 【动态路由】
>> 配置
- {
  path: ':tabLink', component: HomeDetailComponent
}
>> 激活
- <a [routerLink]="{'/home',tab.link, {name: 'val'}}"></a>
- this.router.navigate(['home', tab.link, {name: 'val'}]);

- <a [routerLink]="['/home']" [queryParams]="{name: 'val'}"></a>
- this.router.navigate(['home'],{queryParams: {name: val}});
>> URL
- http://localhost:4200/home/hot;name=val
- http://localhost:4200/home?name=val

>> 读取
- this.route.paramsMap.subscribe(params => {...});
- this.route.queryParamsMap.subscribe(params => {...});




