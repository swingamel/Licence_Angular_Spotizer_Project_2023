import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ChoosePlaylistComponent } from './choose-playlist/choose-playlist.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'list-playlist', component: ListPlaylistComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'choose-playlist', component: ChoosePlaylistComponent },
  { path: 'video-player', component: VideoPlayerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListPlaylistComponent,
    PlaylistComponent,
    ChoosePlaylistComponent,
    HeaderComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
