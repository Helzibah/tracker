import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'material-symbols/outlined.css';
import { TrackingService } from './tracking.service';

@Component({
  selector: 'app-tracker',
  imports: [],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {

  id: string;
  item: string;

  constructor(private route: ActivatedRoute,
    private trackingService: TrackingService,
  ) {
    this.id = route.snapshot.queryParamMap.get('id') || '';
    this.item = route.snapshot.queryParamMap.get('item') || 'package';
  }

  ngOnInit(): void {
    this.trackingService.fetch(this.id).subscribe(result => {
      console.log(result);
    })
  }

}
