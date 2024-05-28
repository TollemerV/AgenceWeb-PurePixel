import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pp-business',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './business/business.component.html',
  styleUrl: './business/business.component.css'
})
export default class BusinessComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
