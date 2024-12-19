import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabs-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.css'],
})
export class TabsComponent {
  activeTab = 0; // Tab inicial ativa

  tabs = [
    { title: 'Informações Gerais', content: 'Aqui estão as informações gerais.' },
    { title: 'Detalhes', content: 'Aqui estão os detalhes sobre o tópico.' },
    { title: 'Contato', content: 'Aqui estão as informações de contato.' },
  ];

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
