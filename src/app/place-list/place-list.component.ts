import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlaceDetailsComponent } from '../place-details/place-details.component';

interface Place {
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
    { name: 'Ейфелева Вежа', description: 'Відома пам’ятка у Парижі, Франція', location: 'Париж, Франція' },
    { name: 'Гранд-Каньйон', description: 'Природний каньйон у Арізоні, США', location: 'Арізона, США' },
    { name: 'Велика Китайська Стіна', description: 'Історична стіна в Китаї', location: 'Китай' }
  ];

  selectedPlace?: Place;

  selectPlace(place: Place) {
    console.log('Clicked on place:', place.name); 
    this.selectedPlace = place;
  }
  
}
