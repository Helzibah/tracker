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

  label: Label | undefined;
  timeline: Timeline | undefined;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private trackingService: TrackingService,
    private labelService: LabelService,
    private timelineService: TimelineService,
  ) {
    this.id = route.snapshot.queryParamMap.get('id') || '';
    this.item = route.snapshot.queryParamMap.get('item') || '';
  }

  ngOnInit(): void {
    this.trackingService.fetch(this.id).subscribe((result: Tracking) => {
      if (result.labelRaw != undefined) {
        this.label = this.labelService.parseRaw(result.labelRaw);
      }
      if (result.timelineRaw != undefined) {
        this.timeline = this.timelineService.parseRaw(result.timelineRaw);
      }
      this.loaded = true;
    })
  }

}
