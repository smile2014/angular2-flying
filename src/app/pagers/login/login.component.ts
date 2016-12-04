import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	admin: any = {};

	constructor (public router: Router, private route: ActivatedRoute) {
	}

	ngOnInit () {
	}

	login () {
		this.router.navigate(["/home"]);
	}

	clearpass () {
		this.admin.password = "";
	}
}
