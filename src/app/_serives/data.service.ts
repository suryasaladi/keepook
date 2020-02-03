
// import 'rxjs/add/operator/map';
// import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
// import { environment } from '../../environments/environment';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { UtilService } from './util.service';

// @Injectable()
// export class DataService {
// 	constructor(
// 		private httpservice: HttpService,
// 		private httpClient: HttpClient,
// 		private router: Router
// 	) {
// 		this.env = environment;
// 		this.priceManagerPath = this.env.priceManagerBaseUrl;
// 		this.serviceCreditPath = this.env.serviceCreditUrl;
// 		this.masterDbPath = this.env.masterDbBaseUrl;
// 	}
// 	env: any;
// 	priceManagerPath: string;
// 	masterDbPath: string;
// 	serviceCreditPath: string;

// 	savePriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	saveUpdatedPriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.put(this.priceManagerPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	getSavedContract(id) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/' + id)
// 			.map((res) => res);
// 	}

// 	submitPriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/submit', data, null, headers)
// 			.map((res) => res);
// 	}

// 	updatePriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/update', data, null, headers)
// 			.map((res) => res);
// 	}

// 	approvePriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/approve', data, null, headers)
// 			.map((res) => res);
// 	}

// 	approveServiceCreditContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.serviceCreditPath + 'agreement/approve', data, null, headers)
// 			.map((res) => res);
// 	}

//     approveReportContract(data: any, headers?: any) {
//         return this.httpservice
//             .post(this.serviceCreditPath + 'report/approve', data, null, headers)
//             .map((res) => res);
//     }

// 	getDetailFromContract(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getHistoryFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

//     getHistoryFromReportId(id: any, headers?: any) {
//         return this.httpservice
//             .get(this.serviceCreditPath + 'report/chain/' + id, null, headers)
//             .map((res) => res);
//     }

// 	getHistoryStatusFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/chain/status/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	itemMasterData(vendorId?: string) {
// 		if (!vendorId) { vendorId = ''; }
// 		return this.httpservice
// 			.get(this.masterDbPath + 'item/list' + '?vendorId=' + vendorId)
// 			.map((res) => res);
// 	}

// 	agreementTypeMasterData() {
// 		return this.httpservice
// 			.get(this.masterDbPath + 'agreement-type/list')
// 			.map((res) => res);
// 	}

// 	catalogueTypeMasterData() {
// 		this
// 		return this.httpservice
// 			.get(this.masterDbPath + 'catalogue/list')
// 			.map((res) => res);
// 	}

// 	vendorTypeMasterData() {
// 		return this.httpservice
// 			.get(this.masterDbPath + 'vendor/list')
// 			.map((res) => res);
// 	}

// 	currencyMasterData() {
// 		return this.httpservice
// 			.get(this.masterDbPath + 'currency/list')
// 			.map((res) => res);
// 	}

// 	marketMasterData() {
// 		return this.httpservice
// 			.get(this.masterDbPath + 'market/list')
// 			.map((res) => res);
// 	}

// 	serviceCreditListing() {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'report')
// 			.map((res) => res);
// 	}

// 	getSavedCreditContract(id) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'agreement/' + id)
// 			.map((res) => res);
// 	}

// 	createPdfDocument(data) {
// 		return this.httpservice.downloadPost(this.serviceCreditPath + 'agreement/generate-agreement', data,null)
// 			.subscribe(response => {
// 				UtilService.downLoadFile(response, "application/pdf", `${new Date().getTime()}.pdf`)
// 			});
// 	}

// 	saveServiceCredit(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.serviceCreditPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	reSaveServiceCredit(data: any, headers?: any) {
// 		return this.httpservice
// 			.put(this.serviceCreditPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	submitServiceCredit(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.serviceCreditPath + 'agreement/submit', data, null, headers)
// 			.map((res) => res);
// 	}

// 	updateServiceCredit(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.serviceCreditPath + 'agreement/update', data, null, headers)
// 			.map((res) => res);
// 	}

// 	queryServiceCreditFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'agreement/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getServiceCreditStatusHistoryFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'agreement/chain/status/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getServiceCreditReportStatusHistoryFromReportId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'report/status/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getServiceCreditKpisFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 		.get(this.serviceCreditPath + 'report/chain/' + id, null, headers)
// 		.map((res) => res);
// 	}

// 	unseenNotificationList() {
// 		return this.httpservice
// 			.get(this.masterDbPath + "notification/allUnseen")
// 			.map((res) => res);
// 	}

// 	seenParticularNotification(id: string) {
// 		return this.httpservice
// 			.get(this.masterDbPath + "notification/seen?contractId=" + id)
// 			.map((res) => res);
// 	}

// 	getReport(reportId: string) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + "report/" + reportId)
// 			.map((res) => res);
// 	}

// 	saveReport(data: object) {
// 		return this.httpservice.put(this.serviceCreditPath + "report/save", data, null);
// 	}
// 	submitReport(data: object) {
// 		return this.httpservice.post(this.serviceCreditPath + "report/submit", data, null);
// 	}

// 	updateReport(data: object) {
// 		return this.httpservice.post(this.serviceCreditPath + "report/update", data, null);
// 	}

// 	getPriceDifferenceHistory(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getAgreementDifferenceHistory(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'agreement/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getReportDifferenceHistory(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + 'report/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getReportingStats(id?: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.serviceCreditPath + "report/statistics")
// 			.map((res) => res);
// 	}

// }
