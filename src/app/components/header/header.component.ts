import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;

  constructor(public _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this._authService.userInfo.subscribe((d: UserData) => {
      this.isLoggedIn = d.isLoggedIn;
    });

    if (localStorage.getItem('id_token')) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('user');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}

export interface UserData {
  user: string;
  isLoggedIn: boolean;
}
