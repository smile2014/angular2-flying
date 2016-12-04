import {Component, OnInit} from '@angular/core';
import {HighChart} from "../../../directives";

@Component({
	templateUrl: './chart-demo.component.html',
	styleUrls: ['./chart-demo.component.scss']
})
export class ChartDemoComponent implements OnInit {

	constructor () {
	}

	ngOnInit () {
	}

	// chart主题
	primaryColor: string = "#F1F1F1";
	theme = {
		chart: {
			backgroundColor: "#1D89DA"
		},
		title: {
			style: {
				color: this.primaryColor,
				font: "bold 10px"
			}
		},
		xAxis: {
			labels: {
				style: {
					color: this.primaryColor
				}
			}
		},
		yAxis: {
			gridLineColor: "rgba(241, 241, 241, 0.5)",
			minorTickColor: this.primaryColor,
			labels: {
				style: {
					color: this.primaryColor
				}
			},
			tickWidth: 0
		},
		tooltip: {
			backgroundColor: "rgba(29, 137, 218, 0.75)",
			style: {
				color: this.primaryColor
			}
		},
		labels: {
			style: {
				color: this.primaryColor
			}
		}
	};

	// chart数据
	categories = ["西冉村", "宝山", "苗寨", "四季青", "北坞村", "金河闸", "田村", "香山"];
	datas = [100, 120, 130, 140, 250, 160, 230, 180];
	chart = new HighChart({
		chart: {
			type: "column"
		},
		title: {
			text: ""
		},
		xAxis: {
			categories: this.categories,
			title: {
				text: null
			},
			tickLength: 0
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			labels: {
				align: "center"
			}
		},
		series: [{
			data: this.datas
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		}
	});

}
