import { Component } from '@angular/core';
import { RawTimelineEvent } from '../shared/timeline.model';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { TimelineService } from '../shared/timeline.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-event',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DatePickerModule,
    TextareaModule,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  eventForm: FormGroup = new FormGroup({
    icon: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
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
    var event = new RawTimelineEvent();
    if (change) {
      if (change.date) {
        var datetime = DateTime.fromJSDate(change.date);
        event.dateFromDateTime(datetime);
      }

      event.icon = change.icon != '' ? change.icon : undefined;
      event.description = change.description != '' ? change.description : undefined;
    }
    this.raw = this.timelineService.outputRaw(event);
  }
}
