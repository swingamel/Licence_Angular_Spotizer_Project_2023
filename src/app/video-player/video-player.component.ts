import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  song: any;
  videoUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.spotifyService.getSong(id).subscribe((data: any) => {
      this.song = data;
      if (this.song) {
        this.videoUrl = `https://www.youtube.com/watch?v=1hLIXrlpRe8`;
        console.log(this.videoUrl);
      }
    });
  }

}
