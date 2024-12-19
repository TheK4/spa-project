import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoAnimation]',
})
export class AutoAnimationDirective implements OnInit {
  constructor(private el: ElementRef) {
    // Configuração inicial dos estilos
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transition = 'opacity 1s ease-out, transform 0.6s ease-out';
    this.el.nativeElement.style.transform = 'translateY(20px)';
  }

  ngOnInit(): void {
    // Aplica a animação automaticamente após um pequeno delay
    setTimeout(() => {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.transform = 'translateY(0)';
    }, 200); // Delay de 200ms para garantir a animação suave
  }
}
