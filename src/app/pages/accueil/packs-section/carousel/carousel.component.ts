import { Component, ElementRef, ViewChild } from '@angular/core';
import { SquarePackComponent } from "../square-pack/square-pack.component";
import { Pack } from '../../../../models/pack';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pp-carousel',
    standalone: true,
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    imports: [SquarePackComponent, CommonModule]
})
export class CarouselComponent {
  listOfPacks: Pack[];
  currentSlide: Pack | undefined
  slideNumber = 0
  ts = 0;
  direction = 0;
  intervalId: any;
  @ViewChild('content')
  private content: ElementRef | undefined;


  constructor() {
    this.listOfPacks = [
      new Pack('svg/Group 194.svg', 'Conseil', ['Améliorez votre site web et stratégie digitale avec notre service d\'audit et de conseil.', 'Nous vous aidons à identifier les opportunités d\'optimisation pour une meilleure performance en ligne.'], '/audit', 'Audit'),
      new Pack('svg/Group 193.svg', 'Graphique', ['Donnez un nouveau souffle à votre site web avec notre service de refonte graphique. ', 'Nous combinons créativité et stratégie pour créer des designs qui améliorent l\'expérience utilisateur et renforcent votre identité de marque.'], '/refonte','Refonte'),
      new Pack('svg/Group 196.svg', 'Communication', ['Élevez votre positionnement en ligne avec notre service dédié au référencement et à la communication. ', 'Des stratégies sur mesure pour améliorer votre SEO et renforcer votre présence en ligne'], '/referencement','Référencement'),
      new Pack('svg/Group 195.svg', "Pixel", ['Rendez votre site web plus vert avec notre service Durable Pixel. ', 'Nous sommes spécialisés dans l’optimisation et la refonte de sites web pour réduire leur empreinte écologique.'], '/durable', "Durable"),
      new Pack('svg/Group 197.svg', 'Création d\'offre', ['Lancez votre business avec succès grâce à notre service de création d\'offre. ', 'Nous vous accompagnons de A à Z dans la mise en place de votre entreprise, en élaborant avec vous des stratégies sur mesure pour un démarrage solide. '], '/business','Business'),
    ];

    this.currentSlide = this.listOfPacks[this.slideNumber]
  }

  ngAfterViewInit(){
    this.resetInterval();
  }

  resetInterval(){
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {this.next()}, 6000);
  }

  prev(){
    if(this.slideNumber - 1 < 0){
      this.slideNumber = this.listOfPacks.length-1;
    }
    else{
      this.slideNumber = this.slideNumber - 1
    }

    this.currentSlide = this.listOfPacks[this.slideNumber]
  }

  next(){
    if(this.slideNumber + 1 === this.listOfPacks.length){
      this.slideNumber = 0;
    }
    else{
      this.slideNumber = this.slideNumber + 1
    }

    this.currentSlide = this.listOfPacks[this.slideNumber]
  }

  onTouchStart(evt: any){
    this.ts = evt.touches[0].clientX;
  }

  onTouchEnd(evt: any){
    clearInterval(this.intervalId)
    this.content!.nativeElement.style.transition = "0.5s"
    this.content!.nativeElement.style.opacity = 0;
    setTimeout(() => {
      if(this.direction === 0)
        this.prev()
      else
        this.next()
    }, 250);
    setTimeout(() => {
      this.content!.nativeElement.style.opacity = 1;
    },250)
  }

  onSwipe(evt: any){
    evt.stopPropagation();
    var te = evt.changedTouches[0].clientX;
    if (this.ts > te) {
        this.direction = 0
    } else {
        this.direction = 1
    }

    return false;

  }
}
