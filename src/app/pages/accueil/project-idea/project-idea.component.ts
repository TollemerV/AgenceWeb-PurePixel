import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'pp-project-idea',
    standalone: true,
    templateUrl: './project-idea.component.html',
    styleUrl: './project-idea.component.scss',
    imports: [ButtonComponent]
})
export class ProjectIdeaComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
