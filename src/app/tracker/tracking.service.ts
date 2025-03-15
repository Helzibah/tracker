import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseAllDocuments } from 'yaml';
import { Section, Sections } from './section.model';
import { Tracking } from './tracking.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  fetch(id: string) : Observable<Tracking> {
    return this.gist(id);
  }

  private gist(id: string) : Observable<Tracking> {
    return this.http.get('https://api.github.com/gists/' + id).pipe(map((result: any) => {
      // only works if there's a single file present
      var files = result.files;
      var keys = Object.keys(files);
      var file = files[keys[0]];
      var content = file != undefined ? file.content : '';
      return this.parseContent(content);
    }))
  }

  private parseContent(content: string) : Tracking {
    var t = new Tracking();
    var documents = parseAllDocuments(content);
    for (var d of documents) {
      if (d.errors.length > 0) {
        console.log("help! document parse errors:", d.errors);
      }

      var doc = d.toJSON() as Section;

      switch (doc.name.toLocaleLowerCase()) {
        case Sections.Label:
          t.labelRaw = d;
          break;
        case Sections.Timeline:
          t.timelineRaw = d;
          break;
        default:
          console.log("unknown section: ", doc, d);
      }
    }
    return t;
  }
}
