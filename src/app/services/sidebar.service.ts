import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: Array<any> = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          path: '/',
        },
        {
          title: 'ProgressBar',
          path: 'progress',
        },
        {
          title: 'Charts',
          path: 'charts',
        },
        {
          title: 'Promesas',
          path: 'promises',
        },
        {
          title: 'Rxjs',
          path: 'rxjs',
        },
      ],
    },
  ];
  constructor() {}
}
