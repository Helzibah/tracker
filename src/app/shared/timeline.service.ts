import { Injectable } from '@angular/core';
import { Timeline, TimelineEvent } from './timeline.model';
import { Document } from 'yaml';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  parseRaw(raw: Document) : Timeline {
    var json = new Timeline(raw.toJSON());

    if (json.events_template) {
      json.events = this.template_events(json.events_template, json.events);
    }

    if (json.future_template) {
      json.future = this.template_events(json.future_template, json.future);
    }

    return json;
  }

  private template_events(template: TimelineEvent, rawEvents: TimelineEvent[]) {
    var events = [];

    for (var e of rawEvents) {
      var event = new TimelineEvent(template);
      event.apply(e);
      events.push(event);
    }

    return events;
  }
}
