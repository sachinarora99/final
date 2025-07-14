import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';  
import { ClaimHistoryComponent } from './components/claim-history/claim-history.component';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, LeaderboardComponent, ClaimHistoryComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
