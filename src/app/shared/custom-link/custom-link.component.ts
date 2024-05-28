// custom-link/custom-link.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pp-custom-link',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.css'],
})

export class CustomLinkComponent {
  @Output()
  linkClicked: EventEmitter<any> = new EventEmitter();
  @Input() linkText: string = '';
  private _customTextFontWeight: string = '800'; // Valeur par défaut

  @Input()
  set customTextFontWeight(weight: string) {
    this._customTextFontWeight = weight;
  }

  get customTextFontWeight(): string {
    return this._customTextFontWeight;
  }

  constructor(private router: Router) {}

}
