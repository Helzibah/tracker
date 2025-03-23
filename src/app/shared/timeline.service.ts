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

    // final event to link the line up to the next
    json.events.push(new TimelineEvent({ date: undefined, description: '', icon: ''}));

    // in-between timeline to bridge the gap to the next timeline
    json.middle = [
      new TimelineEvent({ date: undefined, description: '', icon: ''}),
      new TimelineEvent({ date: undefined, description: '', icon: ''})]

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
