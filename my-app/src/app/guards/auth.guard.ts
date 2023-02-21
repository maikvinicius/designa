import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
}
