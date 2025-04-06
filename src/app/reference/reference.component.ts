import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-reference',
  imports: [
    EventComponent,
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

}
