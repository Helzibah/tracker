import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'material-symbols/outlined.css';
import { Timeline } from '../shared/timeline.model';
import { TimelineService } from '../shared/timeline.service';
import { TimelineComponent } from '../timeline/timeline.component';
import { TrackingService } from './tracking.service';

@Component({
  selector: 'app-tracker',
  imports: [
    CommonModule,
    TimelineComponent,
  ],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {

  id: string;
  item: string;

  timeline: Timeline | undefined;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private trackingService: TrackingService,
    private timelineService: TimelineService,
  ) {
    this.id = route.snapshot.queryParamMap.get('id') || '';
    this.item = route.snapshot.queryParamMap.get('item') || 'package';
  }

  ngOnInit(): void {
    this.trackingService.fetch(this.id).subscribe(result => {
      this.timeline = this.timelineService.parseRaw(result.timelineRaw);
      this.loaded = true;
    })
  }

}
