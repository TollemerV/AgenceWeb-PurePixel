import { Component } from '@angular/core';
import { TitleComponent } from "../../../../shared/title/title.component";
import { ButtonComponent } from "../../../../shared/button/button.component";

@Component({
    selector: 'pp-rdv-section-agence',
    standalone: true,
    templateUrl: './rdv-section.component.html',
    styleUrl: './rdv-section.component.css',
    imports: [TitleComponent, ButtonComponent]
})
export class RdvSectionAgenceComponent {
  
}
