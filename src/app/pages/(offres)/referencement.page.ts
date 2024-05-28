import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'pp-referencement',
    standalone: true,
    templateUrl: './referencement/referencement.component.html',
    styleUrl: './referencement/referencement.component.css',
    imports: [ButtonComponent]
})
export default class ReferencementComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
