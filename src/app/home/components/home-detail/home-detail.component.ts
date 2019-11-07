import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, Channel } from 'src/app/shared/Components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  selectedTabLink: string = '';
  username: string = '';
  /**
   * 轮播图图片数组
   */
  imageSliders: ImageSlider[] = [
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
  channels: Channel[] = [
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
  // @ViewChild('ImageSlider', { static: false }) imageSlider: ImageSliderComponent;
  @ViewChild(ImageSliderComponent, { static: false }) imageSlider: ImageSliderComponent;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
    this.router.queryParamMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
  }



}
