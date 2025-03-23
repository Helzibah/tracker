import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../../shared/timeline.model';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line',
  imports: [
    CommonModule,
    TimelineModule,
  ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  @Input({required: true}) events !: TimelineEvent[];
  @Input() class: string = '';

}
