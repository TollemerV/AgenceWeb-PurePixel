import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-engagement-card-right',
  standalone: true,
  imports: [],
  templateUrl: './engagement-card-right.component.html',
  styleUrl: './engagement-card-right.component.css'
})
export class EngagementCardRightComponent {
  @Input() imageUrl: string = "";
  @Input() title: string = "Titre";
  @Input() paragraphText: string = "paragraph";
}
