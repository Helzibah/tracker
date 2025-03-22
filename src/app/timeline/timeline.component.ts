import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Timeline } from '../shared/timeline.model';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-timeline',
  imports: [
    TimelineModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) timeline !: Timeline;

  ngOnInit() {
    console.log(this.timeline);
  }
}
