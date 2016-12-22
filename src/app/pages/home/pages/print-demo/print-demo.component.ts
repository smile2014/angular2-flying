import {Component, OnInit, ViewChild} from '@angular/core';
import {EssenceNg2PrintComponent} from "../../../../components/essence-ng2-print";

@Component({
    templateUrl: './print-demo.component.html',
    styleUrls: ['./print-demo.component.scss']
})
export class PrintDemoComponent implements OnInit {
    @ViewChild('print1') printComponent: EssenceNg2PrintComponent;
    showHead: boolean = true;
    datas: any[];
    printCSS: string[];
    printStyle: string;

    constructor () {
        this.datas = [
            {
                "firstName": 'Mark',
                "lastName": 'Otto',
                "userName": '@mdo'
            },
            {
                "firstName": 'Jacob',
                "lastName": 'Thornton',
                "userName": '@fat'
            },
            {
                "firstName": 'Larry',
                "lastName": 'the Bird',
                "userName": '@twitter'
            }
        ];

        this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
        this.printStyle =
            `
			th, td {
				color: red !important;
			}
			`;
    }

    ngOnInit () {
    }

    printComplete () {
        console.log('打印完成！');
        this.showHead = true;
    }

    customPrint () {
        this.showHead = false;
        this.printComponent.print();
    }

}
