import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { VideoDashboardComponent } from '../video-dashboard/video-dashboard.component'

@Component({
  selector: 'app-home-page',
  imports: [VideoPlayerComponent, VideoDashboardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
