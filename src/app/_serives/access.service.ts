

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';


@Injectable()
export class AccessService {
	
	saveNewCompany(value: any) {
		throw new Error("Method not implemented.");
	}
	constructor(
		private httpservice: HttpService,
		private httpClient: HttpClient,
		private router: Router
	) {
		this.env = environment;
		this.accessPath = this.env.accessPath;
	}
	env: any;
	
	accessPath: string;
	masterDbPath: string;
	serviceCreditPath: string;

	saveNewRoles(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.accessPath + 'create-business-role', data, null, headers)
			.map((res) => res);
	}

	editRoles(data: any, id: any, headers?: any) {
		console.log(id);
		return this.httpservice
			.put(this.accessPath + 'business-role/' + id, data, null, headers)
			.map((res) => res);
	}

	getAllRoles() {
		return this.httpservice
			.get(this.accessPath + 'business-role')
			.map((res) => res);
	}



	saveNewUsers(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.accessPath + 'create-user', data, null, headers)
			.map((res) => res);
	}

	editUsers(data: any, headers?: any) {
		return this.httpservice
			.put(this.accessPath + 'user/', data, null, headers)
			.map((res) => res);
	}

	getAllUsers() {
		return this.httpservice
			.get(this.accessPath + 'user')
			.map((res) => res);
	}

}