import { Component } from '@angular/core';
import { HeaderSectionAgenceComponent } from './header-section/header-section.component';

@Component({
    selector: 'pp-agence-page',
    standalone: true,
    templateUrl: './agence.component.html',
    imports: [HeaderSectionAgenceComponent],
})
export default class AgenceComponent {}
