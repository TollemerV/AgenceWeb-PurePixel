import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementCardLeftComponent } from './engagement-card-left.component';

describe('EngagementCardLeftComponent', () => {
  let component: EngagementCardLeftComponent;
  let fixture: ComponentFixture<EngagementCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementCardLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagementCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
