import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tracker';

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    var self = this;
    document.addEventListener("visibilitychange", function() {
      if (document.visibilityState === 'visible') {
        self.notificationService.unsetBadge();
      }
    });
  }
}
