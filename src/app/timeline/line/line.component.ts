import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../../shared/timeline.model';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-line',
  imports: [
    TimelineModule,
  ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  @Input({required: true}) events !: TimelineEvent[];

}
