import { Component, inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  private _sidebarSettings: SidebarService = inject(SidebarService);

  public menuItems: Array<any> = [];

  constructor() {
    this.menuItems = this._sidebarSettings.menu;
  }
}
