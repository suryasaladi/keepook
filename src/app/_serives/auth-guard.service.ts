import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthGuardService implements CanActivate {
	constructor(
		public auth: AuthService, 
		public router: Router,
		private toastrService: ToastrService
	) {}
	canActivate(): boolean {
		if (!this.auth.isAuthenticated()) {
			sessionStorage.clear();
			localStorage.clear();
			this.toastrService.warning('Please login!');
			this.router.navigate(['/']);
			return false;
		} else {
			return true;
		}
	}
}
