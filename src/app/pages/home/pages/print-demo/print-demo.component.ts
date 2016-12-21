import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
    templateUrl: './print-demo.component.html',
    styleUrls: ['./print-demo.component.scss']
})
export class PrintDemoComponent implements OnInit {

    @ViewChild('printElement') elementRef: ElementRef;
    private printFrame: HTMLFrameElement;
    private printBody: HTMLElement;
    private printWindow: Window;
    private printDoc: Document;
    datas: any[];

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
    }

    ngOnInit () {
        this.printFrame = this.elementRef.nativeElement;
        this.printBody = this.printFrame.contentDocument.body;
        this.printWindow = this.printFrame.contentWindow;
        this.printDoc = this.printWindow.document;
    }

    setinnerHTML (html: string) {
        this.printDoc.write(`<link href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">`);
        this.printDoc.write(html);
        this.printDoc.close();
    }

    startPrint () {
        let timeoutId: number = window.setTimeout(() => {
            this.printWindow.print();
            window.clearTimeout(timeoutId);
            this.printDoc.clear();
        }, 500);
    }

    print (html: HTMLElement) {
        this.setinnerHTML(html.outerHTML);
        this.startPrint();
    }

}
