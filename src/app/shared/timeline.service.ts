import { Injectable } from '@angular/core';
import { Timeline } from './timeline.model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  parseRaw(raw: string) : Timeline {
    var t = new Timeline();
    t.header = raw;
    return t;
  }
}
