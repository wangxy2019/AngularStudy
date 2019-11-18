import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ImageSlider, ImageSliderComponent, Channel } from 'src/app/shared/Components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  selectedTabLink$: Observable<string>;
  username = '';
  /**
   * 轮播图图片数组
   */
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  sub: Subscription;
  // @ViewChild('ImageSlider', { static: false }) imageSlider: ImageSliderComponent;
  @ViewChild(ImageSliderComponent, { static: false }) imageSlider: ImageSliderComponent;

  constructor(
    private router: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.selectedTabLink$ = this.router.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );

    this.sub = this.router.queryParamMap.subscribe(params => {
      console.log(params);
    });

    this.service.getImageSliders().subscribe(imageSliders => {
      this.imageSliders = imageSliders;
      this.cd.markForCheck();
    });

    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
