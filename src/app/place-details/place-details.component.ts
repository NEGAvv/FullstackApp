import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Place {
  name: string;
  description: string;
  location: string;
}

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
