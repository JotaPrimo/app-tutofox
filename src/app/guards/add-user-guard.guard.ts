import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../alert.service';

@Injectable({
  providedIn: 'root'
})
export class AddUserGuardGuard implements CanActivate {

  constructor(
    private alertService: AlertService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let teste = 2;

    if(teste == 1) {
      this.alertService.error('Não pode adicionar um ADM');
      return false;
    }
    
    this.alertService.error('Não pode adicionar um ADM');
    return false;
  }

}
