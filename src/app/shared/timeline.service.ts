import { Injectable } from '@angular/core';
import { Timeline } from './timeline.model';
import { Document } from 'yaml';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  parseRaw(raw: Document) : Timeline {
    return new Timeline(raw.toJSON());
  }
}
