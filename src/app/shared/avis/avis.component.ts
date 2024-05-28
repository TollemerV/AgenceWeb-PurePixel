import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-avis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent {
  @Input() text: string = ""
  @Input() imgSrc: string = ""
  @Input() name: string = ""
  @Input() title: string = ""
}
