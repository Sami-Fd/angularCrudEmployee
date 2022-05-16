import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angEmployee';
  constructor(private router: Router) {
    console.log(window.localStorage.getItem("user"))
    if (!window.localStorage.getItem("user")) {
      this.router.navigate(['/login']);
    }
  }
}
