import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Place } from '../place-list/place-list.component';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  animations:[routeTransitionAnimations]
})

export class PlaceDetailsComponent {
  @Input() place?: Place;
}
