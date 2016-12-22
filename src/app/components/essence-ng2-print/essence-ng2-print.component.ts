import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'essence-ng2-print',
    templateUrl: './essence-ng2-print.component.html',
    styleUrls: ['./essence-ng2-print.component.scss']
})
export class EssenceNg2PrintComponent implements OnInit {

    @Input() showBtn: boolean; // 是否显示按钮
    @Input() btnClass: Object; // 打印按钮class
    @Input() btnText: string; // 打印按钮文本
    @Input() printHTML: any; // 打印内容
    @Input() printStyle: string; // 打印内容style
    @Input() printCSS: string[]; // 打印内容css文件
    @Output() printComplete: EventEmitter<any>;

    private oldBtnText: string;
    private printWindow: Window;
    private printDoc: Document;

    constructor () {
        this.showBtn = true;
        this.btnClass = {
            "print-btn": true,
            "print-btn-success": true
        };
        this.oldBtnText = this.btnText = '打印';
        this.printComplete = new EventEmitter<any>(false);
    }

    ngOnInit () {
    }

    /**
     * 写入文档
     */
    private writeDocument (): any {
        // 获取打印窗口
        this.getPrintWindow();

        // 写入打印内容
        let html: string = '';
        if (this.printHTML) {
            if (this.printHTML.outerHTML) {
                html = this.printHTML.outerHTML;
            } else {
                html = this.printHTML;
            }
        } else {
            throw '未绑定属性[printHTML]';
        }
        this.printDoc.write(html);

        // 写入打印内容的style
        if (this.printStyle) {
            this.printDoc.write(`<style>${this.printStyle}</style>`);
        }

        // 写入打印内容的css文件
        if (this.printCSS) {
            this.printCSS.forEach((url) => {
                this.printDoc.write(`<link href="${url}" rel="stylesheet">`);
            });
        }

        // 关闭输入流
        this.printDoc.close();
    }

    /**
     * 开始打印
     */
    private startPrint () {
        let timeoutId: number = window.setTimeout(() => {
            this.printWindow.print();
            window.clearTimeout(timeoutId);
            this.printComplete.emit();
            this.btnText = this.oldBtnText;
        }, 500);
    }

    private createIframe () {
        let oldFrame: any = document.getElementsByClassName('ng2-print-frame');
        if (oldFrame.length > 0) {
            oldFrame[0].parentNode.removeChild(oldFrame[0]);
        }
        try {
            let printIframe: any = document.createElement('iframe');
            document.body.appendChild(printIframe);
            printIframe.style.position = 'absolute';
            printIframe.style.border = '0px';
            printIframe.style.width = '0px';
            printIframe.style.height = '0px';
            printIframe.style.right = '0px';
            printIframe.style.top = '-1000px';
            printIframe.className = "ng2-print-frame";
            this.printWindow = printIframe.contentWindow;
            this.printDoc = printIframe.contentDocument ? printIframe.contentDocument : ( printIframe.contentWindow ? printIframe.contentWindow.document : printIframe.document);
        }
        catch (e) {
            throw e + ". iframes may not be supported in this browser.";
        }

        if (!this.printWindow) {
            throw "Cannot find window.";
        }

        if (!this.printDoc) {
            throw "Cannot find document.";
        }
    }

    private getPrintWindow () {
        this.createIframe();
    }

    print () {
        this.oldBtnText = this.btnText;
        this.btnText = '准备打印...';
        let timeoutId: number = window.setTimeout(() => {
            window.clearTimeout(timeoutId);
            this.writeDocument();
            this.startPrint();
        }, 500);
    }

}
