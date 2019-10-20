import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  logout() {
    localStorage.removeItem('login-token');
    this._router.navigateByUrl('/login');
    console.log('You have successfully logged out');
  }
  constructor(private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('login-token') == null) {
      this.logout();
    }
  }

}
