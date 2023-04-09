import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Album, SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.css']
})
export class ArtistAlbumsComponent implements OnInit {
  artistName = 'Liliana Collins';
  albums: Album[] = [];


  constructor(private albumService: SpotifyService, private route: ActivatedRoute) {
    this.albumService.getArtistAlbums(this.artistName)
      .subscribe(albums => this.albums = albums);
  }

  ngOnInit(): void {
    }


  /*ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let artistId = parseInt(<string>params.get('id'));
      this.apiService.getArtistDetails(artistId).subscribe(
        (response: any) => {
          this.artist = response;
          this.albums = response.albums;
          console.log('Albums:', this.albums);
        },
        error => {
          console.log(error);
        }
      );
    });
  }*/
}
