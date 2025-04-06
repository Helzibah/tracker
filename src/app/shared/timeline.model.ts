import { DateTime } from "luxon";

export class Timeline {
  outputs: string[] = [];
  events: TimelineEvent[] = [];
  middle: TimelineEvent[] = [];
  future: TimelineEvent[] = [];

  public constructor(init? : Partial<Timeline>) {
    Object.assign(this, init);
  }
}

export class TimelineEvent {
  datetime?: DateTime = undefined;
  description: string = '';
  icon: string = '';
  side: string = 'right';

  public constructor(init? : Partial<RawTimelineEvent>, timezone?: string) {
    if (init) {
        this._apply(init, timezone);
    }
  }

  public apply(e: Partial<RawTimelineEvent>, timezone?: string) {
    this._apply(e, timezone);
  }

  private _apply(e: Partial<RawTimelineEvent>, timezone?: string) {
    if (e.date) {
      if (timezone) {
        var date = DateTime.fromSQL(e.date, { zone: timezone });
        this.datetime = date;
      } else {
        var date = DateTime.fromSQL(e.date);
        this.datetime = date;
      }
    }

    if (e.side) {
      var side = e.side.toLocaleLowerCase();
      if (side != 'right') {
        e.side == 'left';
      }
    }

    Object.assign(this, e);
  }
}

export class RawTimeline {
  outputs: string[] = [];
  timezone: string = '';
  events_template: RawTimelineEvent = new RawTimelineEvent();
  events: RawTimelineEvent[] = [];
  future_template: RawTimelineEvent = new RawTimelineEvent();
  future: RawTimelineEvent[] = [];

  public constructor(init? : Partial<Timeline>) {
    Object.assign(this, init);
  }
}


export class RawTimelineEvent {
  date: string = '';
  description: string = '';
  icon: string = '';
  side: string = 'right';

  public constructor(init? : Partial<RawTimelineEvent>) {
    if (init) {
      Object.assign(this, init);
    }
  }

}
