import { CommonModule } from '@angular/common';
import { Component, Input, OnInit  } from '@angular/core';
import { Place } from '../place-list/place-list.component';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  animations:[routeTransitionAnimations]
})

export class PlaceDetailsComponent implements OnInit {
  place: any;
  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const placeId = +params.get('id')!;
      this.loadPlaceDetails(placeId);
    });
  }

  loadPlaceDetails(id: number) {
    this.placesService.loadPlaceById(id).subscribe(place => {
      this.place = place;  
    });
  }

  goBack(): void {
    this.router.navigate(['/places']); 
  }
}
