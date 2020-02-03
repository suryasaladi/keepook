

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';


@Injectable()
export class WorkflowService {
	saveNewRoles(value: any) {
		throw new Error("Method not implemented.");
	}
	constructor(
		private httpservice: HttpService,
		private httpClient: HttpClient,
		private router: Router
	) {
		this.env = environment;
		this.workflowPath = this.env.workflowPath;
	}
	env: any;
	workflowPath: string;
	masterDbPath: string;
	serviceCreditPath: string;

	saveNewWorkflow(data: any, headers?: any) {
		console.log('data', data);

		return this.httpservice
			.post(this.workflowPath + 'create-workflow', data, null, headers)
			.map((res) => res);
	}

	editWorkflow(data: any, id: any, headers?: any) {
		console.log(id);
		return this.httpservice
			.put(this.workflowPath + 'workflow/' + id, data, null, headers)
			.map((res) => res);
	}

	getAllWorkflow() {
		return this.httpservice
			.get(this.workflowPath + 'workflow')
			.map((res) => res);
	}


}