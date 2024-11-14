import { Component } from '@angular/core';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeTransitionAnimations]
})
export class HomeComponent {

}
