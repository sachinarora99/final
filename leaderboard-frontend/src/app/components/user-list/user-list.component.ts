import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUserId = '';
  newUserName = '';
  claimedMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  addUser(): void {
    if (!this.newUserName.trim()) return;
    this.userService.addUser(this.newUserName).subscribe(() => {
      this.newUserName = '';
      this.fetchUsers();
    });
  }

  claimPoints(): void {
    if (!this.selectedUserId) return;
    this.userService.claimPoints(this.selectedUserId).subscribe((res) => {
      this.claimedMessage = `${res.user.name} claimed ${res.randomPoints} points!`;
      this.fetchUsers(); // refresh user total points
      setTimeout(() => (this.claimedMessage = ''), 3000);
    });
  }
}
