import { Component } from '@angular/core';
import { HeaderSectionAgenceComponent } from './agence/header-section/header-section.component';
import { SquarePackContainerComponent } from '../accueil/packs-section/square-pack-container/square-pack-container.component';
import { RdvSectionAgenceComponent } from './agence/rdv-section/rdv-section.component';
import { IconTextSectionAgenceComponent } from './agence/icon-text-section/icon-text-section.component';
import { MembersSectionAgenceComponent } from './agence/members-section/members-section.component';

@Component({
    standalone: true,
    templateUrl: './agence/agence.component.html',
    imports: [
        HeaderSectionAgenceComponent,
        SquarePackContainerComponent,
        RdvSectionAgenceComponent,
        IconTextSectionAgenceComponent,
        MembersSectionAgenceComponent,
    ],
})
export default class AgenceComponent {}
