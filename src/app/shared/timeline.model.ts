export class Timeline {
  events: Event[] = [];

  public constructor(init? : Partial<Timeline>) {
    Object.assign(this, init);
  }
}

export class Event {
  public constructor(init? : Partial<Event>) {
    Object.assign(this, init);
  }
}
