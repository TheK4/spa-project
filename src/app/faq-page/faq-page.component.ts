import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAnimationDirective } from '../directives/auto-animation.directive';


@Component({
  selector: 'app-faq-page',
  imports: [CommonModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css',
  hostDirectives: [AutoAnimationDirective],
})
export class FaqPageComponent {
  faqList = [
    { question: 'O que é este site?', answer: 'Este é um SPA com múltiplas funcionalidades.', open: false },
    { question: 'Como faço para acessar o conteúdo?', answer: 'Você precisa se cadastrar e fazer login.', open: false },
    { question: 'Posso customizar minha página?', answer: 'Sim, oferecemos opções de personalização.', open: false },
    { question: 'O que é este site?', answer: 'Este é um SPA com múltiplas funcionalidades.', open: false },
    { question: 'Como faço para acessar o conteúdo?', answer: 'Você precisa se cadastrar e fazer login.', open: false },
    { question: 'Posso customizar minha página?', answer: 'Sim, oferecemos opções de personalização.', open: false },
    { question: 'O que é este site?', answer: 'Este é um SPA com múltiplas funcionalidades.', open: false },
    { question: 'Como faço para acessar o conteúdo?', answer: 'Você precisa se cadastrar e fazer login.', open: false },
    { question: 'Posso customizar minha página?', answer: 'Sim, oferecemos opções de personalização.', open: false },
    { question: 'O que é este site?', answer: 'Este é um SPA com múltiplas funcionalidades.', open: false },
  ];

  toggleItem(item: any) {
    item.open = !item.open;
  }
}
