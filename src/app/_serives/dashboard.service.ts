// import 'rxjs/add/operator/map';
// import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
// import { environment } from '../../environments/environment';
// import { Router } from "@angular/router";
// import { map, catchError } from "rxjs/operators";
// import { throwError } from 'rxjs';
// @Injectable()
// export class DashboardService {

//     env: any;
//     masterDbPath: string;
//     serviceDbPath: string;
//     private static self: DashboardService;
//     constructor(
//         private httpservice: HttpService,
//         private router: Router
//     ) {
//         this.env = environment;
//         this.masterDbPath = this.env.masterDbBaseUrl;
//         this.serviceDbPath = this.env.serviceCreditUrl;
//         DashboardService.self = this;
//     }
   
//     getStatusCount() {
//         return this.httpservice.get(this.masterDbPath + 'collated/count')
//             .map((res) => res);
//     }

//     getAgreementList() {
//         return this.httpservice.get(this.masterDbPath + 'collated/list')
//             .map((res) => res);
//     }
//    checkExist(contractId:any) {
//         return this.httpservice.get(this.masterDbPath + 'collated/exist/'+contractId)
//             .map((res: Response) => res);
//     }

//     getContractList(data, page, perPage) {
//         let url = `${this.masterDbPath}collated/list?page=${page}&limit=${perPage}`;
//         Object.keys(data).forEach(k => {
//             url +=`&${k}=${data[k]}`
//         });
// 		return this.httpservice
// 			.get(url, null)
// 			.pipe(map((res) => res), catchError(this.handleError));
//     }

//     getServiceList(data:any, page=0, limit=11) {
//         let url = `${this.serviceDbPath}report?page=${page}&limit=${limit}`;
//         Object.keys(data).forEach(k => {
//             url +=`&${k}=${data[k]}`
//         });
// 		return this.httpservice
// 			.get(url, null)
// 			.pipe(map((res) => res), catchError(this.handleError));
//     }
    
//     public handleError(error) {
// 		// check if user session is expired
// 		if (error.status === 401 || error.status === 403) {
// 			return DashboardService.self.router.navigate(["/login"]);
// 		}
// 		let errorMessage = "";
// 		if (error.error instanceof ErrorEvent) {
// 			// client-side error
// 			errorMessage = `Error: ${error.error.message}`;
// 		} else {
// 			// server-side error
// 			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
// 		}
// 		// window.alert(errorMessage);
// 		return throwError(errorMessage);
// 	}

//     }



