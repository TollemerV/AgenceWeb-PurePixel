import { Component, Inject } from '@angular/core';
import { AvisComponent } from '../../../shared/avis/avis.component';
import { TitleComponent } from '../../../shared/title/title.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { ButtonComponent } from "../../../shared/button/button.component";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'pp-avis-section',
    standalone: true,
    templateUrl: './avis-section.component.html',
    styleUrl: './avis-section.component.scss',
    imports: [TitleComponent, AvisComponent, CardContainerComponent, ButtonComponent]
})
export class AvisSectionComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
