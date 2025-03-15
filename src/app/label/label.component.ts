import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Label } from '../shared/label.model';

@Component({
  selector: 'app-label',
  imports: [
    CommonModule,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input({required: true}) label !: Label;
  @Input() id: string = '';
  @Input() item: string = '';

  ngOnInit() {
    console.log(this.label);
  }

}
