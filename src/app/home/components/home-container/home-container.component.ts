import { Component, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit, Inject } from '@angular/core';
import { TopMenu, Options } from '../../../shared/Components';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { token } from '../../services';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, AfterViewInit {

  TopMenu: TopMenu[] = [];

  /**
   * 画面制御
   * 滚动导航样式调控
   */
  tabScrollOptions: Options = {
    backgroundColor: 'red',
    titleActiveColor: 'Orange',
    titleColor: '#333',
    indicatorColor: 'green',
  };
  /**
   * 注解注入特殊依赖注入
   * @param baseUrl 依赖注入的值
   */
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) { }

  /**
   * 处理滚动导航点击事件
   * @param tabMenu 当前点击滚动导航对象
   */
  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu);
    this.router.navigate(['home', tabMenu.link]);
  }

  handleChange() {
    this.tabScrollOptions = {
      backgroundColor: 'yellow',
      titleActiveColor: 'green',

    };
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.createO();
    this.TopMenu = this.service.getTabs();
    console.log('baseurl', this.baseUrl);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // console.log('组件轮播图', this.imageSlider);
  }
}
