import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOnEnterL = trigger('fadeInOnEnterL', [
    state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100px)'
    })),
    state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('hidden => visible', [
        animate('800ms ease-out')
    ]),
]);

export const fadeInOnEnterR = trigger('fadeInOnEnterR', [
    state('hidden', style({
        opacity: 0,
        transform: 'translateX(100px)'
    })),
    state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('hidden => visible', [
        animate('800ms ease-out')
    ]),
]);

export const fadeInUp = trigger('fadeInUp', [
    state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
    })),
    state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('800ms ease-out')),
])

