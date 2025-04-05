import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../../shared/timeline.model';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { DateTime } from "luxon";

@Component({
  selector: 'app-line',
  imports: [
    CommonModule,
    TimelineModule,
  ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  @Input({required: true}) events !: TimelineEvent[];
  @Input({required: true}) timezones !: string[];
  @Input() class: string = '';

  format = DateTime.DATETIME_FULL;

  ngOnInit() {
  }

  getDateStrings(datetime: DateTime): string[] {
    var formatted = [];
    var substr = '';
    var length = 0;
    for (var zone of this.timezones) {
      var dt;
      if (zone == '_') {
        dt = datetime.toLocaleString(this.format);
      } else {
        dt = datetime.setZone(zone).toLocaleString(this.format);
      }

      if (substr == '') {
        formatted.push(dt);

        // todo: this won't work in any other locale, but it won't NOT work
        var i = dt.indexOf(' at ');
        substr = dt.substring(0, i);
        length = substr.length;
      } else {
        if (dt.startsWith(substr)) {
          dt = dt.substring(length);
        }

        formatted.push(dt);
      }
    }

    return formatted;
  }
}
