import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaceDetailsComponent } from '../place-details/place-details.component';

export interface Place {
  id: number;
  name: string;
  description: string;
  location: string;
}

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [CommonModule, PlaceDetailsComponent],
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent {
  places: Place[] = [
    { id: 1, name: 'Central Park', location: 'New York', description: 'A large public park in NYC.' },
    { id: 2, name: 'Eiffel Tower', location: 'Paris', description: 'A famous landmark in Paris.' },
    { id: 3, name: 'Great Wall of China', location: 'China', description: 'Historic fortification in China.' },
    { id: 4, name: 'Colosseum', location: 'Rome', description: 'An ancient amphitheatre in Rome.' },
    { id: 5, name: 'Taj Mahal', location: 'Agra, India', description: 'A white marble mausoleum, a symbol of love.' },
    { id: 6, name: 'Machu Picchu', location: 'Peru', description: 'Ancient Incan city located in the Andes Mountains.' },
    { id: 7, name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil', description: 'A giant statue of Jesus Christ on Corcovado mountain.' },
    { id: 8, name: 'Sydney Opera House', location: 'Sydney, Australia', description: 'A famous performing arts venue with a unique sail-like design.' },
    { id: 9, name: 'Pyramids of Giza', location: 'Giza, Egypt', description: 'Ancient Egyptian pyramids, one of the Seven Wonders of the Ancient World.' },
    { id: 10, name: 'Santorini', location: 'Greece', description: 'A stunning island known for its white-washed buildings and blue-domed churches.' },
    { id: 11, name: 'Mount Fuji', location: 'Japan', description: 'An iconic, snow-capped volcano and Japan’s tallest peak.' },
    { id: 12, name: 'Stonehenge', location: 'Wiltshire, England', description: 'A prehistoric monument consisting of a ring of standing stones.' },
    { id: 13, name: 'Grand Canyon', location: 'Arizona, USA', description: 'A massive canyon carved by the Colorado River.' },
    { id: 14, name: 'Angkor Wat', location: 'Siem Reap, Cambodia', description: 'A massive temple complex and the largest religious monument in the world.' },
    { id: 15, name: 'Burj Khalifa', location: 'Dubai, UAE', description: 'The world’s tallest building with breathtaking views of the city.' },
    { id: 16, name: 'Yellowstone National Park', location: 'USA', description: 'The first national park in the world, home to diverse wildlife and geothermal features.' },
    { id: 17, name: 'The Louvre', location: 'Paris, France', description: 'The world’s largest art museum and a historic monument in Paris.' },
    { id: 18, name: 'Niagara Falls', location: 'USA/Canada', description: 'Massive waterfalls located on the border between the United States and Canada.' },
    { id: 19, name: 'Acropolis of Athens', location: 'Athens, Greece', description: 'An ancient citadel that contains several historic structures, including the Parthenon.' },
    { id: 20, name: 'Grand Palace', location: 'Bangkok, Thailand', description: 'A stunning complex of buildings that served as the royal residence.' }
  ];
  

  selectedPlace?: Place;

  selectPlace(place: Place) {
    console.log('Clicked on place:', place.name); 
    this.selectedPlace = place;
  }
  
}
