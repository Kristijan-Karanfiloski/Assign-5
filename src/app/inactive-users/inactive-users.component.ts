import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  // users = this.usersService.inactiveUsers;
  users: any = [];

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  constructor(
    private usersService: UsersService,
    private userSetToActive: UsersService
  ) {}

  onSetToActive(id: number): void {
    this.userSetToActive.setToActive(id);
  }
}
