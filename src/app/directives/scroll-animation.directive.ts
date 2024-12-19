import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.opacity = '0'; // Inicialmente oculto
    this.el.nativeElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    this.el.nativeElement.style.transform = 'translateY(20px)'; // Posicionado abaixo inicialmente
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    if (rect.top <= viewHeight - 100) {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.transform = 'translateY(0)';
    }
  }
}
