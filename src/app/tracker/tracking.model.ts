import { Document } from 'yaml';

export class Tracking {
  configRaw: Document | undefined;
  labelRaw: Document | undefined;
  timelineRaw: Document | undefined;

  public constructor(init? : Partial<Tracking>) {
    Object.assign(this, init);
  }
}
