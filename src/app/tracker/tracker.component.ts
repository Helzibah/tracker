import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabelComponent } from '../label/label.component';
import { Label } from '../shared/label.model';
import { LabelService } from '../shared/label.service';
import { Timeline } from '../shared/timeline.model';
import { TimelineService } from '../shared/timeline.service';
import { TimelineComponent } from '../timeline/timeline.component';
import { Tracking } from './tracking.model';
import { TrackingService } from './tracking.service';
import { Config } from '../shared/config.model';
import { ConfigService } from '../shared/config.service';
import { NotificationService } from '../shared/notification.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-tracker',
  imports: [
    CommonModule,
    LabelComponent,
    TimelineComponent,
  ],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {

  id: string;
  item: string;

  config: Config | undefined;
  label: Label | undefined;
  timeline: Timeline | undefined;
  loaded: boolean = false;

  count: number = 0;

  constructor(private route: ActivatedRoute,
    private trackingService: TrackingService,
    private configService: ConfigService,
    private labelService: LabelService,
    private timelineService: TimelineService,
    private notificationService: NotificationService,
  ) {
    this.id = route.snapshot.queryParamMap.get('id') || '';
    this.item = route.snapshot.queryParamMap.get('item') || '';
  }

  ngOnInit(): void {
    var self = this;
    (function poll() {
      self._fetch().subscribe({
        next: value => {
          if (value) {
            setTimeout(poll, 300000)
          }
        }
      });
    }());
  }

  private _fetch() : Observable<boolean> {
    return new Observable((observer: Observer<any>) => {
      this.trackingService.fetch(this.id).subscribe({
        next: (result: Tracking) => {
          if (result.configRaw != undefined) {
            this.config = this.configService.parseRaw(result.configRaw);
          }
          if (result.labelRaw != undefined) {
            this.label = this.labelService.parseRaw(result.labelRaw);
          }
          if (result.timelineRaw != undefined) {
            this.timeline = this.timelineService.parseRaw(result.timelineRaw);
            var c = this.timeline?.events.length + this.timeline?.future.length || 0;
            if (c != this.count) {
              if (this.loaded) {
                // don't flag for the first run through
                this.notificationService.setBadge();
              }
              this.count = c;
            }
          }

          this.loaded = true;
          observer.next(true);
        }, error: (error) => {
          observer.next(false);
        },
      });
    });
  }

}
