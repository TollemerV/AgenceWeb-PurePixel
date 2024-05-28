import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { EngagementCardLeftComponent } from '../../../shared/engagement-card-left/engagement-card-left.component';
import { EngagementCardRightComponent } from '../../../shared/engagement-card-right/engagement-card-right.component';

@Component({
    selector: 'pp-nos-pures-engagements-section',
    standalone: true,
    templateUrl: './nos-pures-engagements-section.component.html',
    styleUrl: './nos-pures-engagements-section.component.scss',
    imports: [TitleComponent, EngagementCardLeftComponent, EngagementCardRightComponent]
})
export class NosPuresEngagementsSectionComponent {}
