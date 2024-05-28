import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisComponent } from '../../../../shared/avis/avis.component';
import { Avis } from '../../../../models/avis';

@Component({
    selector: 'pp-card-container',
    standalone: true,
    templateUrl: './card-container.component.html',
    styleUrl: './card-container.component.scss',
    imports: [AvisComponent, CommonModule]
})
export class CardContainerComponent {
  listOfAvis: Avis[];

  constructor(){
    this.listOfAvis= [
        new Avis('https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg', 'Expérience exceptionnelle avec cette agence de Lyon ! Leur approche écoresponsable dans la création de sites web est non seulement innovante, mais aussi très professionnelle. Ils ont parfaitement compris nos besoins et ont livré un projet qui dépasse nos attentes. Je recommande vivement leurs services à toutes les entreprises soucieuses de leur impact environnemental.', 'Laurence', "Bravo"),
        new Avis('https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg', 'J\'ai fait appel à cette agence pour refaire le site internet de ma PME et je suis très satisfait du résultat. L\'équipe est compétente, à l\'écoute et passionnée par les questions de durabilité. Leur engagement pour l\'écologie se reflète dans chaque aspect de leur travail. Un grand merci pour leur dévouement et leur expertise en matière de sites écoresponsables.', 'Claire', "Super"),
        new Avis('https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg', 'Travailler avec cette agence lyonnaise a été un vrai plaisir. Leur expertise en matière de design web écoresponsable est impressionnante. Ils ont su proposer des solutions innovantes tout en restant à l\'écoute de nos besoins spécifiques. Leur support technique est également très réactif. Je recommande cette agence à quiconque cherche à réduire son empreinte écologique tout en ayant un site fonctionnel et esthétique.', 'Matthieu', "Génial"),
      ];
    }
}
