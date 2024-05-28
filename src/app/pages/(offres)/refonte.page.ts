import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pp-refonte',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './refonte/refonte.component.html',
  styleUrl: './refonte/refonte.component.css'
})
export default class RefonteComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

}
