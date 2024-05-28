import { Component } from '@angular/core';
import { TitleComponent } from "../../../../shared/title/title.component";

@Component({
    selector: 'pp-header-section-agence',
    standalone: true,
    templateUrl: './header-section.component.html',
    styleUrl: './header-section.component.css',
    imports: [TitleComponent]
})
export class HeaderSectionAgenceComponent {
  
}
