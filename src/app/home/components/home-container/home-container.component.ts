import { Component, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TopMenu, Options } from '../../../shared/Components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, AfterViewInit {

  TopMenu: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '男装',
      link: 'man'
    },
    {
      id: 3,
      title: '热门',
      link: 'hot2'
    },
    {
      id: 4,
      title: '男装',
      link: 'man'
    },
    {
      id: 5,
      title: '热门',
      link: ''
    },
    {
      id: 6,
      title: '男装',
      link: ''
    },
    {
      id: 7,
      title: '热门',
      link: ''
    },
    {
      id: 8,
      title: '男装',
      link: ''
    },
    {
      id: 9,
      title: '男装',
      link: ''
    },
    {
      id: 10,
      title: '热门',
      link: ''
    },
    {
      id: 11,
      title: '男装',
      link: ''
    },
  ];

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


  constructor(private router: Router) { }

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

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // console.log('组件轮播图', this.imageSlider);
  }
}
