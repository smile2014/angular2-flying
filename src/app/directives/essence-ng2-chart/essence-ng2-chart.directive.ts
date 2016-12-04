/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import {Directive, ElementRef, Input, OnInit, OnDestroy, DoCheck} from "@angular/core";

import * as Highcharts from "highcharts";

export class HighChart {
	public ref: any;

	constructor (public options: any) {
	}

	getSeries () {
		return this.options["series"];
	}

	setSeries (series: any) {
		this.options["series"] = series;
	}
}

@Directive({
	selector: "[essence-ng2-chart]"
})
export class EssenceNg2ChartDirective implements OnInit, OnDestroy, DoCheck {
	private el: HTMLElement;
	private oldSeries: any;

	constructor (el: ElementRef) {
		this.el = el.nativeElement;
	}

	@Input("chart") highChart: HighChart;
	@Input("theme") theme: Object;

	ngOnInit () {
		this.init();
	}

	ngOnDestroy () {
		this.destroy();
	}

	ngDoCheck () {
		if (this.highChart.getSeries() !== this.oldSeries) {
			this.oldSeries = this.highChart.getSeries();
			this.destroy();
			this.init();
		}
	}

	init () {
		Highcharts.setOptions(this.theme);
		this.highChart.ref = new Highcharts.Chart(this.el, this.highChart.options);
	}

	destroy () {
		if (this.highChart.ref) {
			this.highChart.ref.destroy();
		}
	}
}
