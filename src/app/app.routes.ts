import { Routes } from '@angular/router';
import { ReferenceComponent } from './reference/reference.component';
import { TrackerComponent } from './tracker/tracker.component';

export const routes: Routes = [
  { path: '', component: TrackerComponent },
  { path: 'ref', component: ReferenceComponent },
];
