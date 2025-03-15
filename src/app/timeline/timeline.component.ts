import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Timeline } from '../shared/timeline.model';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) timeline !: Timeline;

  ngOnInit() {
    console.log(this.timeline);
  }
}
