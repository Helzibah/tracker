import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tracker';
}
