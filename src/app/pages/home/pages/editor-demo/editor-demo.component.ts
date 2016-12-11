import {Component, OnInit, ViewChild} from '@angular/core';
import {EssenceNg2EditorComponent} from "../../../../components";

@Component({
    templateUrl: './editor-demo.component.html',
    styleUrls: ['./editor-demo.component.scss']
})
export class EditorDemoComponent implements OnInit {

    @ViewChild('editor') editor: EssenceNg2EditorComponent;

    e_width: number = 800;
    e_height: number = 300;
    model_text: string = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2</a></p>';

    constructor () {
    }

    ngOnInit () {
    }

    contentChange ($event) {
        console.log("contentChange：", $event);
    }

    editorReady ($event) {
        console.log("ready：", $event);
    }

    setHeight (height: number): void {
        this.editor.setHeight(height);
    }
}
