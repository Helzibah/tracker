import { Injectable } from '@angular/core';
import { RawTimeline, RawTimelineEvent, Timeline, TimelineEvent } from './timeline.model';
import { Document } from 'yaml';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  parseRaw(raw: Document) : Timeline {
    var rawTimeline = new RawTimeline(raw.toJSON());

    var timeline = new Timeline();
    timeline.events = this.create_events(rawTimeline.events, rawTimeline.timezone, rawTimeline.events_template);
    timeline.future = this.create_events(rawTimeline.future, rawTimeline.timezone, rawTimeline.future_template);

    // final event to link the line up to the next
    timeline.events.push(new TimelineEvent({ date: undefined, description: '', icon: ''}));

    // in-between timeline to bridge the gap to the next timeline
    timeline.middle = [
      new TimelineEvent({ date: undefined, description: '', icon: ''}),
      new TimelineEvent({ date: undefined, description: '', icon: ''})
    ];

    // validate timezones for output
    for (var zone of rawTimeline.outputs) {
      if (zone == '_') {
        timeline.outputs.push(zone);
      } else {
        var test = DateTime.local().setZone(zone);
        if (test.isValid) {
          timeline.outputs.push(zone);
        }
      }
    }

    if (timeline.outputs.length == 0) {
      timeline.outputs = ['_'];
    }

    return timeline;
  }

  private create_events(rawEvents: RawTimelineEvent[], timezone: string, template?: RawTimelineEvent) {
    var events = [];

    for (var raw of rawEvents) {
      var event = new TimelineEvent();
      if (template) {
        event.apply(template, timezone);
      }
      event.apply(raw, timezone);
      events.push(event);
    }

    return events;
  }

  outputRaw(raw: RawTimelineEvent) : string {
    var doc = new Document(raw);
    var result = doc.toString({ collectionStyle: 'flow'});
    return result.replaceAll('\n', '');
  }
}
