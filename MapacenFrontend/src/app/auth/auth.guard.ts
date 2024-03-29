import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MyLocalStorageService } from '@shared/services/my-local-storage.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private myLocalStorageService: MyLocalStorageService,
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('userToken') !== null && this.myLocalStorageService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/home'])
    return false;
  }

}
