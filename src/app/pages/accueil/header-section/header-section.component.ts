import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { TitleComponent } from "../../../shared/title/title.component";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'pp-header-section',
    standalone: true,
    templateUrl: './header-section.component.html',
    styleUrl: './header-section.component.css',
    imports: [ButtonComponent, TitleComponent]
})
export class HeaderComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
