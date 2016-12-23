import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {EssenceNg2PrintComponent} from "../../../../components/essence-ng2-print";

@Component({
    templateUrl: './print-demo.component.html',
    styleUrls: ['./print-demo.component.scss']
})
export class PrintDemoComponent implements OnInit {
    @ViewChild('print1') printComponent: EssenceNg2PrintComponent;

    printDiv: any;
    showHead: boolean = true;
    hideTable1: boolean = false;
    datas: any[];
    printCSS: string[];
    printStyle: string;

    constructor (private elRef: ElementRef) {
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

    getPrintDiv () {
        for (let i: number = 0; i < this.elRef.nativeElement.childNodes.length; i++) {
            let node: any = this.elRef.nativeElement.childNodes[i];
            if (node.id === 'print_div') {
                this.printDiv = node;
            }
        }
    }

    printComplete () {
        console.log('打印完成！');
        this.showHead = true;
        this.hideTable1 = false;
    }

    customPrint () {
        this.showHead = false;
        this.hideTable1 = true;
        this.getPrintDiv();
        this.printComponent.print();
    }
}
