import {Component} from '@angular/core';
import {Message} from "primeng/components/common/api";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Calendar
	value: Date;

	// FileUpload
	msgs: Message[];

	uploadedFiles: any[] = [];

	onUpload (event) {
		for (let file of event.files) {
			this.uploadedFiles.push(file);
		}

		this.msgs = [];
		this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
	}

	// Editor
	text1: string = `<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>
        <table><tr><td>fhsjdfhdkjsf</td></tr></table>`;

	text2: string;
}
