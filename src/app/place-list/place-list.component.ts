import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoggerService } from '../services/logger.service';
import { PlaceHistoryService } from '../services/place-history.service';
import { Router } from '@angular/router';
import { PlacesService } from '../services/places.service';

export interface Place {
  id: number;
  name: string;
  description: string;
  location: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [CommonModule, PlaceDetailsComponent, TranslateModule],
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
  animations: [
    routeTransitionAnimations,
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
        transform: 'scale(1)'  
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        transform: 'scale(0.9)'  
      })),
      transition('closed => open', [
        animate('0.5s ease-out', keyframes([
          style({ height: '0px', opacity: 0, transform: 'scale(0.9)', offset: 0 }),  
          style({ height: '*', opacity: 0.7, transform: 'scale(1.05)', offset: 0.5 }),  
          style({ height: '*', opacity: 1, transform: 'scale(1)', offset: 1 })  
        ]))
      ]),
      transition('open => closed', [
        animate('0.7s ease-in', keyframes([
          style({ height: '*', opacity: 1, transform: 'scale(1)', offset: 0 }),  
          style({ height: '0px', opacity: 0.6, transform: 'scale(0.95)', offset: 0.5 }), 
          style({ height: '0px', opacity: 0, transform: 'scale(0.9)', offset: 1 })  
        ]))
      ])
    ])
  ]
})
export class PlaceListComponent implements OnInit {
  places: any[] = [];

  constructor(
    private logger: LoggerService,
    private placeHistoryService: PlaceHistoryService,
    private router: Router,
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {
    this.placesService.loadPlaces();

    this.placesService.places$.subscribe(places => {
      this.places = places;  
    });
  }

  selectedPlace?: Place;

  toggle(place: Place) {
    place.isOpen = !place.isOpen;
    
    const action = place.isOpen ? 'Opened' : 'Closed';
    this.logger.log(`${action} place: ${place.name}`); 
    this.placeHistoryService.addToHistory(action, place);
  }

  selectPlace(place: Place) {
    this.logger.log(`Clicked on place: ${place.name}`); 
    this.placeHistoryService.addToHistory("Clicked on place:", place);

    if (this.selectedPlace === place) {
      this.toggle(place);
    } else {
      this.router.navigate(['/place', place.id]);
      place.isOpen = true;
    }
  }

  viewHistory(): void {
    const history = this.placeHistoryService.getHistory();
    this.logger.log('Action History:');
    history.forEach((entry) => this.logger.log(entry));
  }
}
