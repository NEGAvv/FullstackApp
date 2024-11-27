import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
   private placesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
   places$: Observable<any[]> = this.placesSubject.asObservable();
   private pageSize = 5;  
   private currentPage = 1;
   
   constructor() {}
 
   loadPlaces() {
    const places = [
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
    ];
    
     this.placesSubject.next(places);  
   }
 
   loadPlaceById(id: number): Observable<any> {
     return new Observable(observer => {
       const place = this.placesSubject.value.find(p => p.id === id);
       observer.next(place);
       observer.complete();
     });
   }
   getPaginatedPlaces(page: number): Observable<any[]> {
    const places = this.placesSubject.value;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return new Observable(observer => {
      observer.next(places.slice(startIndex, endIndex));
      observer.complete();
    });
  }
}
