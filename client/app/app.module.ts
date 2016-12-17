import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {Ng2PaginationModule} from 'ng2-pagination';

import { appRoutes } from '../routes/routes';

import { DiscogsService } from '../services/discogs.service';
import { YoutubeService } from '../services/youtube.service';

import { ActiveMembersPipe } from '../pipes/active-members.pipe';
import { JoinNamesPipe } from '../pipes/join-names.pipe';
import { EmbedPipe } from '../pipes/embed.pipe';

import { AppComponent } from './app.component';
import { WantlistComponent } from './wantlist/wantlist.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DetailComponent } from './detail/detail.component';
import { CollectionComponent } from './collection/collection.component';
import { SalesComponent } from './sales/sales.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    WantlistComponent,
    SearchBoxComponent,
    MainMenuComponent,
    DetailComponent,
    ActiveMembersPipe,
    JoinNamesPipe,
    EmbedPipe,
    CollectionComponent,
    SalesComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule
  ],
  providers: [DiscogsService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
