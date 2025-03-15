import { Injectable } from '@angular/core';
import { Document } from 'yaml';
import { Label } from './label.model';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor() { }

  parseRaw(raw: Document) : Label {
    return new Label(raw.toJSON());
  }
}
