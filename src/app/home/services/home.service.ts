import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/Components';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
/**
 * 注解的参数如果不写，则编译时全部编译到js中
 * 如果写入`providedIn: 'root'` 只有使用的注入才回被编译到js中
 * 可以是字符串`root`
 * 注入模块后都将编译到js中。
 * 可以是模块
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private TopMenu: TopMenu[] = [
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

  private imageSliders: ImageSlider[] = [
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=2551121849,3276036345&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=3099443564,3000777564&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=281639794,1295715339&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=2551121849,3276036345&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=3099443564,3000777564&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=281639794,1295715339&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    }
  ];
  private channels: Channel[] = [
    {
      title: '百度',
      alt: '百度icon',
      id: 1,
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度2',
      id: 2,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',

    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    }
  ];

  constructor(private http: HttpClient) { }

  getTabs() {

    return this.http.get<TopMenu[]>(`${environment.baseUrl}/banners`, { params: { icode: '123' } });

    // return this.TopMenu;
  }

  getImageSliders() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/imageSliders`, { params: { icode: '123' } });

    // return this.imageSliders;
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, { params: { icode: '123' } });

    // return this.channels;
  }

}
