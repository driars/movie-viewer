import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ColorModes } from 'src/app/types';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  colorMode: ColorModes;

  constructor(private theme: ThemeService) {
    this.colorMode = theme.current;
  }

  onColorModeChanged(value: boolean) {
    this.colorMode = value ? 'dark' : 'light';
    this.theme.current = this.colorMode;
  }
}
