import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePackContainerComponent } from './square-pack-container.component';

describe('SquarePackContainerComponent', () => {
  let component: SquarePackContainerComponent;
  let fixture: ComponentFixture<SquarePackContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquarePackContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquarePackContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
