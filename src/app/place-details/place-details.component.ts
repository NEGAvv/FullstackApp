import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Place } from '../place-list/place-list.component';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})

export class PlaceDetailsComponent {
  @Input() place?: Place;
}
