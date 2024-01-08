import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
