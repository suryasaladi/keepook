import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../_serives/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("spinnerLoad", { static: false }) spinnerLoad;
	loginForm: FormGroup;
	submit: boolean = false;
	incorrectErr: boolean = false;
	constructor(
		private formBuilder: FormBuilder,
		public toastrService: ToastrService,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.authService.logout();
		this.loginForm = this.formBuilder.group({
			usernameOrEmail: ["", Validators.required],
			password: ["", Validators.required]
		});
		setTimeout(() => {
			/** spinner ends after 5 seconds */
			this.spinnerLoad.spinnerHide();
		  }, 2000);
	}
	login(data) {
		this.submit = true;
		this.spinnerLoad.spinnerShow();
		this.authService.login(data)
		.subscribe(res => {				
			this.submit = false;
			this.spinnerLoad.spinnerHide();
			this.router.navigate(['/dashboard'])
		}, err => {
			this.incorrectErr=true;
			
			this.spinnerLoad.spinnerHide();
			setTimeout(()=>{
				this.incorrectErr=false;
			},5000);
			this.toastrService.error("Incorrect Username or Password!");
			this.submit = false;
			this.spinnerLoad.spinnerHide();
		})
	}
}