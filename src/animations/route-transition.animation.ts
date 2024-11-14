import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export const fadeInAnimation = animation([
  animate('{{duration}} ease-out', keyframes([
    style({ opacity: 0, transform: 'translateY(-5px)', offset: 0 }),
    style({ opacity: 0.5, transform: 'translateY(5px)', offset: 0.5 }),
    style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
  ]))
]);

export const fadeOutAnimation = animation([
  animate('{{duration}} ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
]);

export const routeTransitionAnimations = trigger('routeTransition', [
  transition(':enter', [
    useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
  ]),
  transition(':leave', [
    useAnimation(fadeOutAnimation, { params: { duration: '500ms' } })
  ])
]);