import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoAnimationDirective } from '../directives/auto-animation.directive';


@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  hostDirectives: [AutoAnimationDirective],
})
export class RegisterPageComponent {

  constructor(private router: Router) {}
  
    navigateTo(path: string): void {
      this.router.navigate([path]);
    }

}
