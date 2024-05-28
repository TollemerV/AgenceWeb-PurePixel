import { Component, HostListener } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { SquarePackContainerComponent } from "./square-pack-container/square-pack-container.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
    selector: 'pp-packs-section',
    standalone: true,
    templateUrl: './packs-section.component.html',
    styleUrl: './packs-section.component.css',
    imports: [CommonModule, TitleComponent, SquarePackContainerComponent, CarouselComponent]
})
export class PacksSectionComponent {
    isMobileResolution = false;


    @HostListener('window:load',['$event'])
    onPageLoad(event: Event) {
        if(window.innerWidth > 768){
            this.isMobileResolution = false
        }
        else{
            this.isMobileResolution = true
        }
    }

    @HostListener('window:resize', ['$event'])
    onResolutionChanged(event: any){
        if(window.innerWidth > 768){
            this.isMobileResolution = false
        }
        else{
            this.isMobileResolution = true
        }
    }
}
