import { Injectable } from '@angular/core';
import { ColorModes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public static default: ColorModes = 'light';

  public get current(): ColorModes {
    if (localStorage.getItem('theme') as ColorModes === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
      return 'dark';

    return 'light';
  }

  public set current(value: ColorModes) {
    localStorage.setItem('theme', value);
    document.documentElement.dataset['bsTheme'] = this.current;
  }

  constructor() {
    document.documentElement.dataset['bsTheme'] = this.current;
  }
}
