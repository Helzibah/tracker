import { Component } from '@angular/core';
import { TimelineEvent } from '../shared/timeline.model';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TimelineService } from '../shared/timeline.service';

@Component({
  selector: 'app-event',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  eventForm: FormGroup = new FormGroup({
    icon: new FormControl(''),
  });
  raw: string = '';

  constructor(
    private timelineService: TimelineService,
  ) {
  }

  ngOnInit() {
    this.eventForm.valueChanges.subscribe(change => this.updateEvent(change));
    this.updateEvent(null);
  }

  updateEvent(change: any) {
    var event = new TimelineEvent(change);
    this.raw = this.timelineService.parseEventToRaw(event);
  }
}
