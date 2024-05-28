import { Component } from '@angular/core';
import { HeaderComponent } from './accueil/header-section/header-section.component';
import { PacksSectionComponent } from './accueil/packs-section/packs-section.component';
import { NotrePureVisionSectionComponent } from './accueil/notre-pure-vision-section/notre-pure-vision-section.component';
import { ProjectIdeaComponent } from './accueil/project-idea/project-idea.component';
import { NosPuresEngagementsSectionComponent } from './accueil/nos-pures-engagements-section/nos-pures-engagements-section.component';
import { AvisSectionComponent } from './accueil/avis-section/avis-section.component';

@Component({
    selector: 'pp-home-page',
    standalone: true,
    templateUrl: './accueil/accueil.component.html',
    styleUrl: './accueil/accueil.component.css',
    imports: [HeaderComponent, PacksSectionComponent, NotrePureVisionSectionComponent, ProjectIdeaComponent, NosPuresEngagementsSectionComponent, AvisSectionComponent]
})
export default class HomePageComponent {

}
