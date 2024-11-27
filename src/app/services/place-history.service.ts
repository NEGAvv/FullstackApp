import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Place } from '../place-list/place-list.component';

@Injectable({
  providedIn: 'root'
})
export class PlaceHistoryService {
  private history: string[] = [];

  constructor(private logger: LoggerService) {}

  addToHistory(action: string, place: Place): void {
    const message = `${action} place: ${place.name} at ${new Date().toLocaleString()}`;
    this.history.push(message);
    this.logger.log(message); 
  }

  getHistory(): string[] {
    return this.history;
  }
}
