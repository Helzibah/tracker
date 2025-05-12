import { Component } from '@angular/core';
import { RawTimelineEvent } from '../shared/timeline.model';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { TimelineService } from '../shared/timeline.service';
import { DateTime } from 'luxon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DatePickerModule,
    TextareaModule,
    ButtonModule,
    CommonModule,
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
  icons: string[] = ['star', 'emoji_food_beverage', 'cookie', 'ramen_dining', 'restaurant',
    'live_tv', 'menu_book', 'waves',
    'train', 'directions_railway', 'flight_takeoff', 'flight_land', 'directions_car'];

  constructor(
    private timelineService: TimelineService,
  ) {
  }

  ngOnInit() {
    this.eventForm.valueChanges.subscribe(change => this.updateEvent(change));
    this.updateEvent(null);
  }

  setIcon(icon: string) {
    this.eventForm.patchValue({icon: icon});
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

  copy() {
    navigator.clipboard.writeText('  ' + this.raw + ',');
  }
}
