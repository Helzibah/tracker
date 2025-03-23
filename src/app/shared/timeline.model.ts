export class Timeline {
  events_template: TimelineEvent = new TimelineEvent();
  events: TimelineEvent[] = [];
  future_template: TimelineEvent = new TimelineEvent();
  future: TimelineEvent[] = [];
  middle: TimelineEvent[] = [];

  public constructor(init? : Partial<Timeline>) {
    Object.assign(this, init);
  }
}

export class TimelineEvent {
  date: Date = new Date();
  description: string = '';
  icon: string = '';

  public constructor(init? : Partial<TimelineEvent>) {
    if (init) {
        this._apply(init);
    }
  }

  public apply(e: Partial<TimelineEvent>) {
    this._apply(e);
  }

  private _apply(e: Partial<TimelineEvent>) {
    if (e.date) {
      var parsed = new Date(e.date);

      // check that the date parses correctly
      e.date = isNaN(parsed.getTime()) ? undefined : parsed;
    }

    Object.assign(this, e);
  }
}
