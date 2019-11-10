import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, ImageSliderComponent, Channel } from 'src/app/shared/Components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  selectedTabLink: string = '';
  username: string = '';
  /**
   * 轮播图图片数组
   */
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  // @ViewChild('ImageSlider', { static: false }) imageSlider: ImageSliderComponent;
  @ViewChild(ImageSliderComponent, { static: false }) imageSlider: ImageSliderComponent;

  constructor(
    private router: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
      // 由于安全策略改变，非@Input数据改变无法监听，导致路由变化被忽略
      // 此时需要手动通知Angular框架进行检测并更新页面
      this.cd.markForCheck();
    });
    this.router.queryParamMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });

    this.imageSliders = this.service.getImageSliders();

    this.channels = this.service.getChannels();
  }



}
