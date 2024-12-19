import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoAnimationDirective } from '../directives/auto-animation.directive';


@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  hostDirectives: [AutoAnimationDirective],
})
export class LoginPageComponent {

  constructor(private router: Router) {}
  
    navigateTo(path: string): void {
      this.router.navigate([path]);
    }

}
