import { Component } from '@angular/core';
import { SquarePackComponent } from '../square-pack/square-pack.component';
import { CommonModule } from '@angular/common';
import { Pack } from '../../../../models/pack';

@Component({
  selector: 'pp-square-pack-container',
  standalone: true,
  imports: [SquarePackComponent, CommonModule],
  templateUrl: './square-pack-container.component.html',
  styleUrl: './square-pack-container.component.scss',
})
export class SquarePackContainerComponent {
  listOfPacks1: Pack[];
    listOfPacks2: Pack[];


  constructor() {
    this.listOfPacks1 = [
      new Pack('svg/Group 194.svg', 'Conseil', ['Améliorez votre site web et stratégie digitale avec notre service d\'audit et de conseil.', 'Nous vous aidons à identifier les opportunités d\'optimisation pour une meilleure performance en ligne.'], '/audit', 'Audit'),
      new Pack('svg/Group 193.svg', 'Graphique', ['Donnez un nouveau souffle à votre site web avec notre service de refonte graphique. ', 'Nous combinons créativité et stratégie pour créer des designs qui améliorent l\'expérience utilisateur et renforcent votre identité de marque.'], '/refonte', 'Refonte'),
    ];

    this.listOfPacks2 = [
      new Pack('svg/Group 196.svg', 'Communication', ['Élevez votre positionnement en ligne avec notre service dédié au référencement et à la communication. ', 'Des stratégies sur mesure pour améliorer votre SEO et renforcer votre présence en ligne'], '/referencement', 'Référencement'),
      new Pack('svg/Group 195.svg', "Pixel", ['Rendez votre site web plus vert avec notre service Durable Pixel. ', 'Nous sommes spécialisés dans l’optimisation et la refonte de sites web pour réduire leur empreinte écologique.'], '/durable', "Durable"),
      new Pack('svg/Group 197.svg', 'Création d\'offre', ['Lancez votre business avec succès grâce à notre service de création d\'offre. ', 'Nous vous accompagnons de A à Z dans la mise en place de votre entreprise, en élaborant avec vous des stratégies sur mesure pour un démarrage solide. '], '/business' ,'Business'),
    ];
  }
}
