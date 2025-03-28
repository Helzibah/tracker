import { Injectable } from '@angular/core';
import { Document } from 'yaml';
import { Config } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  parseRaw(raw: Document) : Config {
    return new Config(raw.toJSON());
  }
}
