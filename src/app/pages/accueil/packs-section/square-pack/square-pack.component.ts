import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../../shared/button/button.component";

@Component({
    selector: 'pp-square-pack',
    standalone: true,
    templateUrl: './square-pack.component.html',
    styleUrl: './square-pack.component.scss',
    imports: [CommonModule, ButtonComponent]
})
export class SquarePackComponent {
  @Input() image!: string;
  @Input() text!: string;
  @Input() paragraphs!: string[];
  @Input() title?: string;
  @Input() onClickRedirectUrl?: string = undefined;
  @Input() url?: string = undefined;
  @Input() isClickable : boolean = false

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

  navigateIfMobile(url: string){
    if(this.isClickable)
      this.router.navigate([url]);
  }

  navigate(){
    if(this.onClickRedirectUrl !== undefined)
      this.router.navigate([this.onClickRedirectUrl])
  }
}
