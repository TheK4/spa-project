import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  videoProgress = 0; // Progresso do vídeo
  videoId = 'custom-video'; // Identificador único do vídeo

  ngOnInit(): void {
    // Recupera o progresso do localStorage, se existir
    const savedProgress = localStorage.getItem(this.videoId);
    if (savedProgress) {
      this.videoProgress = parseFloat(savedProgress);
    }
  }

  saveProgress(videoElement: HTMLVideoElement): void {
    // Salva o progresso no localStorage
    const currentTime = videoElement.currentTime;
    localStorage.setItem(this.videoId, currentTime.toString());
  }

  handleVideoLoaded(videoElement: HTMLVideoElement): void {
    // Define o progresso do vídeo para o tempo salvo
    videoElement.currentTime = this.videoProgress;
  }
}
