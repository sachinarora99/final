import { Component, OnInit } from '@angular/core';
import { ClaimHistory } from '../../models/history';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
})
export class ClaimHistoryComponent implements OnInit {
  history: ClaimHistory[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchHistory();

    // Optional: refresh every 10 seconds
    setInterval(() => this.fetchHistory(), 10000);
  }

  fetchHistory(): void {
    this.userService.getHistory().subscribe((data) => {
      // Sort latest first
      this.history = data.sort((a, b) => new Date(b.claimedAt).getTime() - new Date(a.claimedAt).getTime());
    });
  }
}
