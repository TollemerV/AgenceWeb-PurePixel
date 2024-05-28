import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() align!: string;
  @Input() mobilealign: string = "center";
  @Input() color = "black";
}
