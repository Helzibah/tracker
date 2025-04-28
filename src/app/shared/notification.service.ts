import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  og : string = 'package-outlined.svg';
  flagged: string = 'package-notif.svg';

  constructor() { }

  setBadge() {
    this._set(this.flagged);
  }

  unsetBadge() {
    this._set(this.og);
  }

  private _set(icon: string) {
    var element = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');
    if (!element) {
      element = document.createElement('link');
      element.rel = 'icon';
      document.head.appendChild(element);
    }
    element.href = icon;
  }
}
