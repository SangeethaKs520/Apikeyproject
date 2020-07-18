import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:  AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isUserLogedIn()) {
      return true;
    } 
    else 
    {
     this.router.navigate(['/']);
      return false;
    }
  }
  
}