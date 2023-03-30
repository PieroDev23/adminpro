import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  private _settingsSvc: SettingsService = inject(SettingsService);

  ngOnInit(): void {
    this._settingsSvc.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this._settingsSvc.changeTheme(theme);
  }
}
