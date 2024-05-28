import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output()
  linkClicked: EventEmitter<any> = new EventEmitter();
  @Input() buttonText: string = '';
  @Input() icon: string = '';
  @Input() background: string = '#000000';
  @Input() textColor: string = "white";

  constructor(private router: Router) {}
}
