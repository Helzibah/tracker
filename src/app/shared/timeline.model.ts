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
        Object.assign(this, init);
    }
  }
  public apply(raw: Partial<RawTimelineEvent>, timezone?: string) {
    this._apply(raw, timezone);
  }

  private _apply(raw: Partial<RawTimelineEvent>, timezone?: string) {
    if (raw.date) {
      if (timezone && raw.date) {
        var date = DateTime.fromSQL(raw.date, { zone: timezone });
        this.datetime = date;
      } else {
        var date = DateTime.fromSQL(raw.date);
        this.datetime = date;
      }
    }

    if (raw.side) {
      var side = raw.side.toLocaleLowerCase();
      if (side != 'right') {
        raw.side == 'left';
      }
    }

    this.icon = raw.icon ?? '';
    this.description = raw.description ?? '';
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
  date?: string = undefined;
  description?: string = undefined;
  icon?: string = undefined;
  side?: string = undefined;

  public constructor(init? : Partial<RawTimelineEvent>) {
    if (init) {
      Object.assign(this, init);
    }
  }

  dateFromDateTime(datetime: DateTime) {
    this.date = datetime.toFormat('yyyy-MM-dd HH:mm');
  }
}
