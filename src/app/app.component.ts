import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-routes';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  onLogin() {
    this.authService.login();
    this.http.post('/api/auth', {}).subscribe((ob) => {
      console.log('on login auth', ob);
    });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
