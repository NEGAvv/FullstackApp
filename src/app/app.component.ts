import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../animations/route-transition.animation';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeTransitionAnimations]
})

export class AppComponent {
  constructor(private translate: TranslateService)
  {
  }
  title = 'AngularApp';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  toggleLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }
}
