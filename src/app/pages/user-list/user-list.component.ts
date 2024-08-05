import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  UserService=inject(UserService);
  userList:any[]=[];

  ngOnInit(): void {
    this.loadUsers();
    
  }
    loadUsers() {
      let nameCounter = 1;
      this.UserService.getUsers().subscribe((data: any) => {
        this.userList = data.map((user: any) => {
          if (user.name === null) {
            user.name = `Name ${nameCounter}`;
            nameCounter++;
          }
          return user;
        });
        console.log(this.userList);
      });
    }
    
  }

