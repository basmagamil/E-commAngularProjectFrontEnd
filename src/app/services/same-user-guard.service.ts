import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class SameUserGuardService implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('current user', this.usersService.currentUser);
    console.log('url', state);
    console.log('id', route.paramMap.get('id'));
    if (this.usersService.currentUser.id == route.paramMap.get('id'))
      return true;
    this.router.navigate(['/no-access']);
    return false;
  }
}
