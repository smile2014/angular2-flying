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

    private printWindow: Window;
    private printDoc: Document;

    constructor () {
        this.showBtn = true;
        this.btnClass = {
            "print-btn": true,
            "print-btn-success": true
        };
        this.btnText = '打印';
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
        }, 500);
    }

    private createIframe () {
        if (document.getElementsByClassName('ng2-print-frame').length > 0) {
            document.getElementsByClassName('ng2-print-frame')[0].remove();
        }
        try {
            let printIframe: any = document.createElement('iframe');
            document.body.appendChild(printIframe);
            printIframe.style = 'position: absolute;border: 0;width: 0;height: 0;right: 0;top: 0;';
            printIframe.className = 'ng2-print-frame';
            this.printWindow = printIframe.contentWindow;
            this.printDoc =  this.printWindow.document;
        }
        catch (e) {
            throw e + ". iframes may not be supported in this browser.";
        }

        if (!this.printWindow) {
            throw "Cannot find window.";
        }

        if (!this.printDoc){
            throw "Cannot find document.";
        }
    }

    private getPrintWindow () {
        this.createIframe();
    }

    print () {
        let timeoutId: number = window.setTimeout(() => {
            window.clearTimeout(timeoutId);
            this.writeDocument();
            this.startPrint();
        }, 50);
    }

}
