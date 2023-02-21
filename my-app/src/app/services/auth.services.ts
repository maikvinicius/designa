import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router: Router) { }

  public isLoggedIn(): boolean {
    return !!localStorage.user;
  }

  public get currentUser(): string {
    return localStorage.user;
  }

  public login(email: string): void {
    if (email) {
      localStorage.setItem('user', email);
      this.router.navigateByUrl('/cursos');
    }
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
