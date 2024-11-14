import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

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
  imports: [CommonModule, PlaceDetailsComponent],
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
export class PlaceListComponent {
  places: Place[] = [
    { id: 1, name: 'Central Park', location: 'New York', description: 'A large public park in NYC.', isOpen: false },
    { id: 2, name: 'Eiffel Tower', location: 'Paris', description: 'A famous landmark in Paris.', isOpen: false },
    { id: 3, name: 'Great Wall of China', location: 'China', description: 'Historic fortification in China.', isOpen: false },
    { id: 4, name: 'Colosseum', location: 'Rome', description: 'An ancient amphitheatre in Rome.', isOpen: false },
    { id: 5, name: 'Taj Mahal', location: 'Agra, India', description: 'A white marble mausoleum, a symbol of love.', isOpen: false },
    { id: 6, name: 'Machu Picchu', location: 'Peru', description: 'Ancient Incan city located in the Andes Mountains.', isOpen: false },
    { id: 7, name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil', description: 'A giant statue of Jesus Christ on Corcovado mountain.', isOpen: false },
    { id: 8, name: 'Sydney Opera House', location: 'Sydney, Australia', description: 'A famous performing arts venue with a unique sail-like design.', isOpen: false },
    { id: 9, name: 'Pyramids of Giza', location: 'Giza, Egypt', description: 'Ancient Egyptian pyramids, one of the Seven Wonders of the Ancient World.', isOpen: false },
    { id: 10, name: 'Santorini', location: 'Greece', description: 'A stunning island known for its white-washed buildings and blue-domed churches.', isOpen: false },
    { id: 11, name: 'Mount Fuji', location: 'Japan', description: 'An iconic, snow-capped volcano and Japan’s tallest peak.', isOpen: false },
    { id: 12, name: 'Stonehenge', location: 'Wiltshire, England', description: 'A prehistoric monument consisting of a ring of standing stones.', isOpen: false },
    { id: 13, name: 'Grand Canyon', location: 'Arizona, USA', description: 'A massive canyon carved by the Colorado River.', isOpen: false },
    { id: 14, name: 'Angkor Wat', location: 'Siem Reap, Cambodia', description: 'A massive temple complex and the largest religious monument in the world.', isOpen: false },
    { id: 15, name: 'Burj Khalifa', location: 'Dubai, UAE', description: 'The world’s tallest building with breathtaking views of the city.', isOpen: false },
    { id: 16, name: 'Yellowstone National Park', location: 'USA', description: 'The first national park in the world, home to diverse wildlife and geothermal features.', isOpen: false },
    { id: 17, name: 'The Louvre', location: 'Paris, France', description: 'The world’s largest art museum and a historic monument in Paris.', isOpen: false },
    { id: 18, name: 'Niagara Falls', location: 'USA/Canada', description: 'Massive waterfalls located on the border between the United States and Canada.', isOpen: false },
    { id: 19, name: 'Acropolis of Athens', location: 'Athens, Greece', description: 'An ancient citadel that contains several historic structures, including the Parthenon.', isOpen: false },
    { id: 20, name: 'Grand Palace', location: 'Bangkok, Thailand', description: 'A stunning complex of buildings that served as the royal residence.', isOpen: false }
  ];

  selectedPlace?: Place;

  toggle(place: Place) {
    place.isOpen = !place.isOpen;
    console.log(place.isOpen);
  }

  selectPlace(place: Place) {
    console.log('Clicked on place:', place.name);
    if (this.selectedPlace === place) {
      this.toggle(place);
    } else {
      this.selectedPlace = place;
      place.isOpen = true;
    }
  }
}
