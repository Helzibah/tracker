export class Timeline {
  events_template: TimelineEvent = new TimelineEvent();
  events: TimelineEvent[] = [];
  future_template: TimelineEvent = new TimelineEvent();
  future: TimelineEvent[] = [];

  public constructor(init? : Partial<Timeline>) {
    Object.assign(this, init);
  }
}

export class TimelineEvent {
  date: string = '';
  description: string = '';
  icon: string = '';

  public constructor(init? : Partial<TimelineEvent>) {
    Object.assign(this, init);
  }

  public apply(e: Partial<TimelineEvent>) {
    Object.assign(this, e);
  }
}
