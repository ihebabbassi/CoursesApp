import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApprovementGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  canActivate() {
    if (this.tokenStorage.getUser().user.Activation == false) {
      this.router.navigate(['/wait-approvement']);

      return false;
    }
    this.router.navigate(['/dashboard']);

    return true;
  }
}
