import { Component, EventEmitter, Input, Output } from "@angular/core"
import { AppSection } from "./AppSection";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    public readonly AppSection = AppSection;
    public currentSection: AppSection;

    @Output()
    public onAppSectionChange: EventEmitter<AppSection> = new EventEmitter<AppSection>();
    
    public SetSection(section:AppSection){
        this.currentSection = section;
        this.onAppSectionChange.emit(this.currentSection);
    }
}

