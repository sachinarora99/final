import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit {
  topThree: User[] = [];
  restLeaderboard: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchLeaderboard();
    setInterval(() => this.fetchLeaderboard(), 5000);
  }

  fetchLeaderboard(): void {
    this.userService.getLeaderboard().subscribe((data) => {
      this.topThree = data.slice(0, 3);
      this.restLeaderboard = data.slice(3);
    });
  }
}
