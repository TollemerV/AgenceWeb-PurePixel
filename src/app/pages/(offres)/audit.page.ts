import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'pp-audit',
    standalone: true,
    templateUrl: './audit/audit.component.html',
    styleUrl: './audit/audit.component.css',
    imports: [ButtonComponent]
})
export default class AuditComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
