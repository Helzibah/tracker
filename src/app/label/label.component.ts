import { Component, Input } from '@angular/core';
import { Label } from '../shared/label.model';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input({required: true}) label !: Label;

  ngOnInit() {
    console.log(this.label);
  }

}
