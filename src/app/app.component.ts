import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header', { static: true }) headerElement?: ElementRef;

  ngAfterViewInit(): void {
    const headerHeight = this.headerElement?.nativeElement.clientHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }
}
