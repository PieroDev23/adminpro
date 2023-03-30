import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private themeTag: HTMLLinkElement = <HTMLLinkElement>(
    document.querySelector('#theme')
  );

  public links!: NodeListOf<HTMLAnchorElement>;

  constructor() {
    const getTheme =
      localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.themeTag.setAttribute('href', getTheme);
  }

  changeTheme(theme: string) {
    const href = `./assets/css/colors/${theme}.css`;
    this.themeTag.setAttribute('href', href);
    localStorage.setItem('theme', href);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll('.selector');

    links.forEach((element) => {
      element.classList.remove('working');
      const theme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${theme}.css`;
      const currentTheme = this.themeTag.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
