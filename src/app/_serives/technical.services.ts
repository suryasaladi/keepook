

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';


@Injectable()
export class TechnicalService {
	saveNewRoles(value: any) {
		throw new Error("Method not implemented.");
	}
	constructor(
		private httpservice: HttpService,
		private httpClient: HttpClient,
		private router: Router
	) {
		this.env = environment;
		this.technicalPath = this.env.technicalPath;
	}
	env: any;
	technicalPath: string;
	masterDbPath: string;
	serviceCreditPath: string;

	saveNewTemplete(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.technicalPath + 'create-company', data, null, headers)
			.map((res) => res);
	}

	

	getAllTemplete() {
		return this.httpservice
			.get(this.technicalPath + 'company')
			.map((res) => res);
	}



	saveNewContract(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.technicalPath + 'create-organisation-unit', data, null, headers)
			.map((res) => res);
	}

	

	getAllContract() {
		return this.httpservice
			.get(this.technicalPath + 'organisation-unit')
			.map((res) => res);
	}

	saveNewPathFile(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.technicalPath + 'create-department', data, null, headers)
			.map((res) => res);
	}

	

	getAllPathFile() {
		return this.httpservice
			.get(this.technicalPath + 'department-unit')
			.map((res) => res);
	}

	saveNewDataSource(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.technicalPath + 'create-usergroup-unit', data, null, headers)
			.map((res) => res);
	}

	editDataSource(data: any, headers?: any) {
		return this.httpservice
			.put(this.technicalPath + 'usergroup-unit', data, null, headers)
			.map((res) => res);
	}

	getAllDataSource() {
		return this.httpservice
			.get(this.technicalPath + 'usergroup-unit')
			.map((res) => res);
	}





}