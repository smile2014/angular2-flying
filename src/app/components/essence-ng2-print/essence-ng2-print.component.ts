import {Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'essence-ng2-print',
	templateUrl: './essence-ng2-print.component.html',
	styleUrls: ['./essence-ng2-print.component.scss']
})
export class EssenceNg2PrintComponent implements OnInit {
	@ViewChild('printElement') elementRef: ElementRef;

	@Input() btnClass: Object; // 打印按钮的class
	@Input() printHTML: any; // 打印内容
	@Input() printStyle: string; // 打印内容的style
	@Input() printCSS: string[]; // 打印内容的css文件
	@Output() printComplete: EventEmitter<any> = new EventEmitter<any>(false);

	private printWindow: Window;
	private printDoc: Document;

	constructor () {
		this.btnClass = {
			"print-btn": true,
			"print-btn-success": true
		};
	}

	ngOnInit () {
		this.printWindow = this.elementRef.nativeElement.contentWindow;
		this.printDoc = this.printWindow.document;
	}

	/**
	 * 写入文档
	 */
	writeDocument (): any {
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
	startPrint () {
		let timeoutId: number = window.setTimeout(() => {
			this.printWindow.print();
			window.clearTimeout(timeoutId);
			this.printComplete.emit();
		}, 100);
	}

	print () {
		this.writeDocument();
		this.startPrint();
	}

}
