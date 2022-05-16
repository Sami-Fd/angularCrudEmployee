import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_models/users';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: Users = new Users();
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

  }
  login() {
    this.authService.login(this.user).subscribe(result => {
      if (result[0].username == this.user.username && result[0].password == this.user.password) {
        window.localStorage.setItem("user", JSON.stringify(result[0]));
        this.router.navigate(['/employee']);
      } else {
        console.log("error")
      }
    })
  }
}
