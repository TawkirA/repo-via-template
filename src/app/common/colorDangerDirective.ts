import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[color-red]'
})

export class ColorDangerDirective {
    constructor(elr: ElementRef) {
        elr.nativeElement.style.color = 'red';
    }
}

