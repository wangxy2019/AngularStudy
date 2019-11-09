import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, Channel } from 'src/app/shared/Components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

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
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  // @ViewChild('ImageSlider', { static: false }) imageSlider: ImageSliderComponent;
  @ViewChild(ImageSliderComponent, { static: false }) imageSlider: ImageSliderComponent;

  constructor(
    private router: ActivatedRoute,
    private service: HomeService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
    this.router.queryParamMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });

    this.imageSliders = this.service.getImageSliders();

    this.channels = this.service.getChannels();
  }



}
