import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyIn = trigger('flyIn', [
  transition('void => *', [
    animate(3000, keyframes([
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      style({ opacity: 1, transform: 'translateX(0)' })
    ]))
  ]),
  transition('* => void', [
    animate(3000, keyframes([
      style({ opacity: 1, transform: 'translateX(0)' }),
      style({ opacity: 0, transform: 'translateX(100%)' })
    ]))
  ])
]);
