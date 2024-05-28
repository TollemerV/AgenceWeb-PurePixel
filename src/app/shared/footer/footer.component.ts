import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'pp-footer',
  standalone: true,
  imports: [CustomLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }
}
