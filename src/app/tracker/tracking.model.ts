export class Tracking {
  timelineRaw: string = '';

  public constructor(init? : Partial<Tracking>) {
    Object.assign(this, init);
  }
}
