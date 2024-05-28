import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-engagement-card-left',
  standalone: true,
  imports: [],
  templateUrl: './engagement-card-left.component.html',
  styleUrl: './engagement-card-left.component.css'
})
export class EngagementCardLeftComponent {
  @Input() imageUrl: string = "";
  @Input() title: string = "Titre";
  @Input() paragraphText: string = "paragraph"; 
}
