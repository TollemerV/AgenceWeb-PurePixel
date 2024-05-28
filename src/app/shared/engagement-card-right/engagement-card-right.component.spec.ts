import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementCardRightComponent } from './engagement-card-right.component';

describe('EngagementCardRightComponent', () => {
  let component: EngagementCardRightComponent;
  let fixture: ComponentFixture<EngagementCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementCardRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagementCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
