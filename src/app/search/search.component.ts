import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  searchQuery: string = 'title';
  songs: any[] = [];
  artists: any[] = [];
  albums: any[] = [];
  playlists: any[] = [];

  constructor(private spotifyService: SpotifyService, private http: HttpClient, private router: Router) {
  }


  ngOnInit(): void {
    this.spotifyService.getAlbums().subscribe((data: any) => {
      this.albums = Object.values(data);
    });
  }

  search() {
    // Appel à la méthode de recherche de chansons
    this.spotifyService.searchSongs(this.searchText).subscribe((response: any) => {
      console.log('Search response (songs):', response);
      this.songs = response;
    });

    // Appel à la méthode de recherche d'artistes
    this.spotifyService.searchArtists(this.searchText).subscribe((response: any) => {
      console.log('Search response (artists):', response);
      this.artists = response;
    });

    // Appel à la méthode de recherche d'albums
    this.spotifyService.searchAlbums(this.searchText).subscribe((response: any) => {
      console.log('Search response (albums):', response);
      this.albums = response;
    });

    // Appel à la méthode de recherche de playlists
    this.spotifyService.searchPlaylists(this.searchText).subscribe((response: any) => {
      console.log('Search response (playlists):', response);
      this.playlists = response;
    });
  }
}
