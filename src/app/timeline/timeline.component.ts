import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Timeline } from '../shared/timeline.model';
import { LineComponent } from './line/line.component';

@Component({
  selector: 'app-timeline',
  imports: [
    LineComponent,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) timeline !: Timeline;

  ngOnInit() {
  }
}
