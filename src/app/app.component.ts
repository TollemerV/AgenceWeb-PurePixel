import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeadComponent } from "./shared/nav-head/nav-head.component";
import { FooterComponent } from './shared/footer/footer.component';
import { AccueilComponent } from "./pages/accueil/accueil.component";

@Component({
    selector: 'pp-root',
    standalone: true,
    template: `
  <pp-nav-head></pp-nav-head>
  <router-outlet (deactivate)="onDeactivate()"></router-outlet>
  <pp-footer></pp-footer>`,
    imports: [RouterOutlet, NavHeadComponent, FooterComponent,AccueilComponent]
})
export class AppComponent {
  onDeactivate() {
  document.body.scrollTop = 0;
  // Alternatively, you can scroll to top by using this other call:
  // window.scrollTo(0, 0)
}
}
