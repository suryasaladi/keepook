

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';


@Injectable()
export class EntityService {
	saveNewRoles(value: any) {
		throw new Error("Method not implemented.");
	}
	constructor(
		private httpservice: HttpService,
		private httpClient: HttpClient,
		private router: Router
	) {
		this.env = environment;
		this.entityPath = this.env.entityPath;
	}
	env: any;
	entityPath: string;
	masterDbPath: string;
	serviceCreditPath: string;

	saveNewCompany(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.entityPath + 'create-company', data, null, headers)
			.map((res) => res);
	}

	editCompany(data: any, id: any, headers?: any) {
		console.log(id);
		return this.httpservice
			.put(this.entityPath + 'company/' + id, data, null, headers)
			.map((res) => res);
	}

	getAllCompany() {
		return this.httpservice
			.get(this.entityPath + 'company')
			.map((res) => res);
	}



	saveNewOrganization(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.entityPath + 'create-organisation-unit', data, null, headers)
			.map((res) => res);
	}

	editOrganization(data: any, headers?: any) {
		return this.httpservice
			.put(this.entityPath + 'organisation-unit', data, null, headers)
			.map((res) => res);
	}

	getAllOrganization() {
		return this.httpservice
			.get(this.entityPath + 'organisation-unit')
			.map((res) => res);
	}

	saveNewDepartment(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.entityPath + 'create-department', data, null, headers)
			.map((res) => res);
	}

	editDepartment(data: any, headers?: any) {
		return this.httpservice
			.put(this.entityPath + 'department-unit', data, null, headers)
			.map((res) => res);
	}

	getAllDepartment() {
		return this.httpservice
			.get(this.entityPath + 'department-unit')
			.map((res) => res);
	}

	saveNewUserGroup(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.entityPath + 'create-usergroup-unit', data, null, headers)
			.map((res) => res);
	}

	editUserGroup(data: any, headers?: any) {
		return this.httpservice
			.put(this.entityPath + 'usergroup-unit', data, null, headers)
			.map((res) => res);
	}

	getAllUserGroup() {
		return this.httpservice
			.get(this.entityPath + 'usergroup-unit')
			.map((res) => res);
	}





}