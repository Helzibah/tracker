import { Document } from 'yaml';

export class Tracking {
  labelRaw: Document | undefined;
  timelineRaw: Document | undefined;

  public constructor(init? : Partial<Tracking>) {
    Object.assign(this, init);
  }
}
