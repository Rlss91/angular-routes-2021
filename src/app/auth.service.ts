export class AuthService {
  loggedIn: boolean;
  constructor() {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<any> {
    const promise = new Promise((ok, not) => {
      setTimeout(() => {
        ok(this.loggedIn);
      }, 200);
    });
    return promise;
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
