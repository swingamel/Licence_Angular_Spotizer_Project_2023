import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {from, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api';
  private apiUrls = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums';

  constructor(private http: HttpClient) {
  }

  getAlbums(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<any> {
    return from(
      fetch(`${this.apiUrl}/albums/${id}`)
        .then(response => response.json())
    );
  }
  getSong(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/songs/${id}`);
  }


  searchSongs(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/songs?title=${query}`).pipe(
      map((response: any) => {
        if (Array.isArray(response)) {
          return response;
        } else {
          return [response];
        }
      })
    );
  }

  searchArtists(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/artists?name=${query}`).pipe(
      map((response: any) => {
        if (Array.isArray(response)) {
          return response;
        } else {
          return [response];
        }
      })
    );
  }


  searchAlbums(query: string): Observable<any> {
    console.log('Search query:', query); // Ajout de l'instruction console.log
    return this.http.get(`${this.apiUrl}/albums?title=${query}`).pipe(
      map((response: any) => {
          if (Array.isArray(response)) {
            return response;
          } else {
            return [response];
          }
        }
      ));
  }

  searchPlaylists(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/playlists?name=${query}`).pipe(
      map((response: any) => {
          if (Array.isArray(response)) {
            return response;
          } else {
            return [response];
          }
        }
      ));
  }

  getArtistAlbums(artistName: string, page?: number): Observable<Album[]> {
    let params = new HttpParams()
      .set('artist.name', artistName);
    if (page) {
      params = params.set('page', page.toString());
    }
    return this.http.get<Album[]>(this.apiUrls, { params });
  }
}

export interface Album {
  id: number;
  title: string;
  image: string;
}
