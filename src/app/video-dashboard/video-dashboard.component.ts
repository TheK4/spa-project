import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatePercentagePipe } from '../calculate-percentage.pipe';

interface Video {
  id: string;
  title: string;
  duration: number; // Duração total do vídeo em segundos
  progress: number; // Progresso atual em segundos
}

@Component({
  selector: 'app-video-dashboard',
  imports: [CommonModule, CalculatePercentagePipe],
  standalone: true,
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[] = [
    { id: 'video-1', title: 'Introdução', duration: 300, progress: 0 },
    { id: 'video-2', title: 'Conceitos Básicos', duration: 600, progress: 0 },
    { id: 'video-3', title: 'Práticas Avançadas', duration: 900, progress: 0 },
  ];

  totalProgress = 0; // Progresso total em porcentagem

  ngOnInit(): void {
    // Recupera o progresso de cada vídeo do localStorage
    this.videos.forEach((video) => {
      const savedProgress = localStorage.getItem(video.id);
      video.progress = savedProgress ? parseFloat(savedProgress) : 0;
    });
    this.calculateTotalProgress();
  }

  calculateTotalProgress(): void {
    const totalDuration = this.videos.reduce((sum, video) => sum + video.duration, 0);
    const totalWatched = this.videos.reduce((sum, video) => sum + video.progress, 0);
    this.totalProgress = Math.floor((totalWatched / totalDuration) * 100);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
