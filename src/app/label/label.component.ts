import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { Label } from '../shared/label.model';

@Component({
  selector: 'app-label',
  imports: [
    CommonModule,
    QRCodeComponent,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input({required: true}) label !: Label;
  @Input() id: string = '';
  @Input() item: string = '';

  to: string[] = [];

  ngOnInit() {
    console.log(this.label);
    if (this.label.to) {
      this.to = this.label.to.split('\n');
    }
  }

}
