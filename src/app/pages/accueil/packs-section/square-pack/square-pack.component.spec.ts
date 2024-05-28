import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePackComponent } from './square-pack.component';

describe('SquarePackComponent', () => {
  let component: SquarePackComponent;
  let fixture: ComponentFixture<SquarePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquarePackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquarePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
