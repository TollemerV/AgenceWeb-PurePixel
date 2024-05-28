import { Component, ElementRef, Inject  } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints,LayoutModule } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'pp-nav-head',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ButtonComponent,
    CustomLinkComponent,
  ],
  templateUrl: './nav-head.component.html',
  styleUrl: './nav-head.component.css'
})

export class NavHeadComponent {
  isMenuOpen: boolean = false;
  $isMobile?: Observable<BreakpointState>;
  isDropdownOpen: boolean = false;

  constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver, private router: Router, @Inject(DOCUMENT) private document: Document) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
        this.closeMenuElement();
      }
    });
  }


  redirectToPage(route: string) {
    if(route.startsWith('http')){
      this.document.location.href = route;
    }else{
      this.router.navigate([route]);
    }
  }

  ngOnInit(): void {
    this.$isMobile = this.breakpointObserver.observe([Breakpoints.HandsetPortrait])
  }

 toggleMobileMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  const menuElement = this.elementRef.nativeElement.querySelector('.menu');

  if (this.isMenuOpen) {
    menuElement.classList.add('mobile-menu-open');
    document.body.classList.add('no-scroll'); // Empêche le défilement de la page
    menuElement.classList.remove('menu-slide-out');
    menuElement.style.display = 'flex'; // S'assure que l'élément est visible avant de commencer l'animation
    menuElement.classList.add('menu-slide-in');
  } else {
    menuElement.classList.remove('menu-slide-in');
    menuElement.classList.add('menu-slide-out');
    setTimeout(() => {
      menuElement.style.display = 'none';
      menuElement.classList.remove('mobile-menu-open');
      document.body.classList.remove('no-scroll'); // Autorise le défilement de la page
    }, 400); // Délai correspondant à la durée de l'animation pour assurer son achèvement
  }
}
private closeMenuElement() {
  const menuElement = this.elementRef.nativeElement.querySelector('.menu');
  if (menuElement.classList.contains('mobile-menu-open')) {
    menuElement.classList.remove('menu-slide-in');
    menuElement.classList.add('menu-slide-out');
    setTimeout(() => {
      menuElement.style.display = 'none';
      menuElement.classList.remove('mobile-menu-open');
      document.body.classList.remove('no-scroll');
    }, 400);
  }
}


toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
  const dropdownElement = this.elementRef.nativeElement.querySelector('.dropdown-content');

  if (this.isDropdownOpen) {
    dropdownElement.classList.add('dropdown-slide-in');
    dropdownElement.classList.remove('dropdown-slide-out');
    dropdownElement.style.display = 'block';
  } else {
    dropdownElement.classList.add('dropdown-slide-out');
    dropdownElement.classList.remove('dropdown-slide-in');
    setTimeout(() => {
      dropdownElement.style.display = 'none';
    }, 300); // Délai correspondant à la durée de l'animation pour assurer son achèvement
  }
}

logAndToggleDropdown(event: Event) {
  event.stopPropagation();
  this.toggleDropdown();
}
}
