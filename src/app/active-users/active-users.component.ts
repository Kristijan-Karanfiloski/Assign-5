import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  // users = this.usersService.activeUsers;

  users: any = [];

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  constructor(
    private usersService: UsersService,
    private userSetToInactive: UsersService
  ) {}

  onSetToInActive(id: number): void {
    this.userSetToInactive.setToInactive(id);
  }
}
