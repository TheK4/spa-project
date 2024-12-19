import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-home-page',
  imports: [VideoPlayerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
