import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFn(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  private _settingsSvc: SettingsService = inject(SettingsService);

  ngOnInit(): void {
    customInitFn();
  }
}
