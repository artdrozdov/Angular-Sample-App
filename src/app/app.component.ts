import { Component } from '@angular/core';
import { AppSection } from './header/AppSection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-basic';
  public currentSection:AppSection;

  public handleAppSectionChange(section:AppSection){
    this.currentSection = section;
  }
}
