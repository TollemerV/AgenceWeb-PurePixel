import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './durable/durable.component.html',
    styleUrl: './durable/durable.component.css',
    imports: [ButtonComponent]
})
export default class DurableComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
