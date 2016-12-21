import {Component, OnInit} from '@angular/core';

@Component({
	templateUrl: './bootstrap-theme.component.html',
	styleUrls: ['./bootstrap-theme.component.scss']
})
export class BootstrapThemeComponent implements OnInit {
	printCSS: string[];

	constructor () {
		this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
	}

	ngOnInit () {
	}

}
