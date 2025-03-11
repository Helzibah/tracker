import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tracker',
  imports: [],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {

  id: string = '';
  item: string = '';

  constructor(private route: ActivatedRoute,) {  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.item = params.get('item') || 'package';
    });
  }

}
