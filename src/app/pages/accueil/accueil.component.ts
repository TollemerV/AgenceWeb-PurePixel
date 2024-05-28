import { Component } from '@angular/core';
import { HeaderComponent } from "./header-section/header-section.component";
import { PacksSectionComponent } from './packs-section/packs-section.component';
import { NotrePureVisionSectionComponent } from './notre-pure-vision-section/notre-pure-vision-section.component';
import { ProjectIdeaComponent } from './project-idea/project-idea.component';
import { NosPuresEngagementsSectionComponent } from "./nos-pures-engagements-section/nos-pures-engagements-section.component";
import { AvisSectionComponent } from './avis-section/avis-section.component';

@Component({
    selector: 'pp-accueil',
    standalone: true,
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css',
    imports: [HeaderComponent, PacksSectionComponent, NotrePureVisionSectionComponent, ProjectIdeaComponent, NosPuresEngagementsSectionComponent, AvisSectionComponent]
})
export class AccueilComponent {
  
}
