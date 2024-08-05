import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };
  UserService = inject(UserService);
  router = inject(Router);
  login() {
    // debugger;
    this.UserService.onLogin(this.loginObj).subscribe((data) => {
      // debugger;
      console.log('button clicked');
      console.log(data);
      // debugger;
      localStorage.setItem('useApp', JSON.stringify(data));
      this.router.navigateByUrl('user-list');
    });
  }
}
