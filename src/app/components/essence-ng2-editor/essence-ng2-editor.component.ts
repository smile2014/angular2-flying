import {
    Component, OnInit, OnDestroy, ElementRef, Renderer, Self, Input, Output, EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NgModel} from "@angular/forms";

declare var UE: any;

@Component({
    selector: 'essence-ng2-editor[ngModel]',
    templateUrl: './essence-ng2-editor.component.html',
    styleUrls: ['./essence-ng2-editor.component.scss'],
    providers: [NgModel]
})
export class EssenceNg2EditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
    ue: any = null;
    text: string;
    cd: NgModel;
    renderer: Renderer;
    elementRef: ElementRef;
    config: any;

    defaultConfig: any = {
        autoHeightEnabled: true,
        allowDivTransToP: false,
        toolbars: [
            ['fullscreen', 'source', 'undo', 'redo'],
            ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc']
        ]
    };

    Editor: any = UE.Editor;
    EventBase: any = UE.EventBase;
    uNode: any = UE.uNode;
    domRange: any = UE.dom.Range;
    domSelection: any = UE.dom.Selection;
    domUtils: Function = UE.dom.domUtils;
    ajax: any = UE.ajax;
    browser: any = UE.browser;
    utils: Function = UE.utils;

    @Input()
    set option (config: any) {
        this.config = config;
    }

    get option (): any {
        return this.config;
    }

    // 编辑器准备就绪后会触发该事件
    @Output()
    ready: EventEmitter<any> = new EventEmitter<any>(false);

    // 执行destroy方法,会触发该事件
    @Output()
    destroy: EventEmitter<any> = new EventEmitter<any>(false);

    // 执行reset方法,会触发该事件
    @Output()
    reset: EventEmitter<any> = new EventEmitter<any>(false);

    // 执行focus方法,会触发该事件
    @Output()
    focusEvent: EventEmitter<any> = new EventEmitter<any>(false);

    // 语言加载完成会触发该事件
    @Output()
    langReady: EventEmitter<any> = new EventEmitter<any>(false);

    // 运行命令之后会触发该命令
    @Output()
    beforeExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

    // 运行命令之后会触发该命令
    @Output()
    afterExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

    // 运行命令之前会触发该命令
    @Output()
    firstBeforeExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

    // 在getContent方法执行之前会触发该事件
    @Output()
    beforeGetContent: EventEmitter<any> = new EventEmitter<any>(false);

    // 在getContent方法执行之后会触发该事件
    @Output()
    afterGetContent: EventEmitter<any> = new EventEmitter<any>(false);

    // 在getAllHtml方法执行时会触发该事件
    @Output()
    getAllHtml: EventEmitter<any> = new EventEmitter<any>(false);

    // 在setContent方法执行之前会触发该事件
    @Output()
    beforeSetContent: EventEmitter<any> = new EventEmitter<any>(false);

    // 在setContent方法执行之后会触发该事件
    @Output()
    afterSetContent: EventEmitter<any> = new EventEmitter<any>(false);

    // 每当编辑器内部选区发生改变时，将触发该事件
    // 警告： 该事件的触发非常频繁，不建议在该事件的处理过程中做重量级的处理
    @Output()
    selectionchange: EventEmitter<any> = new EventEmitter<any>(false);

    // 在所有selectionchange的监听函数执行之前，会触发该事件
    @Output()
    beforeSelectionChange: EventEmitter<any> = new EventEmitter<any>(false);

    // 在所有selectionchange的监听函数执行完之后，会触发该事件
    @Output()
    afterSelectionChange: EventEmitter<any> = new EventEmitter<any>(false);

    // 编辑器内容发生改变时会触发该事件
    @Output()
    contentChange: EventEmitter<any> = new EventEmitter<any>(false);

    constructor (@Self() cd: NgModel, renderer: Renderer, elementRef: ElementRef) {
        this.cd = cd;
        cd.valueAccessor = this;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }

    ngOnInit () {
        if (!this.elementRef.nativeElement.id) {
            this.elementRef.nativeElement.id = new Date().getTime().toString();
            console.warn("编辑器容器最好设置id！");
        }
        this.text = this.cd.value;
        let con: any = $.extend(true, {}, this.defaultConfig, this.config);
        this.ue = UE.getEditor(this.elementRef.nativeElement.id, con);

        // 注册事件
        this.ue.addListener('ready', (editor: any) => {
            this.setContent(this.text);
            this.ready.emit(this);
            this.focus();
        });

        this.ue.addListener('destroy', (editor: any) => {
            this.destroy.emit(this);
        });

        this.ue.addListener('reset', (editor: any) => {
            this.reset.emit(this);
        });

        this.ue.addListener('focus', (editor: any) => {
            this.focusEvent.emit(this);
        });

        this.ue.addListener('langReady', (editor: any) => {
            this.langReady.emit(this);
        });

        this.ue.addListener('beforeExecCommand', (editor: any) => {
            this.beforeExecCommand.emit(this);
        });

        this.ue.addListener('afterExecCommand', (editor: any) => {
            this.afterExecCommand.emit(this);
        });

        this.ue.addListener('firstBeforeExecCommand', (editor: any) => {
            this.firstBeforeExecCommand.emit(this);
        });

        this.ue.addListener('beforeGetContent', (editor: any) => {
            this.beforeGetContent.emit(this);
        });

        this.ue.addListener('afterGetContent', (editor: any) => {
            this.afterGetContent.emit(this);
        });

        this.ue.addListener('getAllHtml', (editor: any) => {
            this.getAllHtml.emit(this);
        });

        this.ue.addListener('beforeSetContent', (editor: any) => {
            this.beforeSetContent.emit(this);
        });

        this.ue.addListener('afterSetContent', (editor: any) => {
            this.afterSetContent.emit(this);
        });

        this.ue.addListener('selectionchange', (editor: any) => {
            this.selectionchange.emit(this);
        });

        this.ue.addListener('beforeSelectionChange', (editor: any) => {
            this.beforeSelectionChange.emit(this);
        });

        this.ue.addListener('afterSelectionChange', (editor: any) => {
            this.afterSelectionChange.emit(this);
        });

        this.ue.addListener('contentChange', () => {
            this.writeValue(this.getContent());
            this.cd.viewToModelUpdate(this.getContent());
            this.contentChange.emit(this.getContent());
        });
    }

    ngOnDestroy () {
        this.ue && this.ue.destroy();
        this.ue = null;
    }

    // ueditor常用API
    /**
     * 设置编辑器高度
     * 提示：当配置项autoHeightEnabled为真时,该方法无效
     * @param height 编辑器高度（不带单位）
     */
    setHeight (height: number): any {
        this.ue && this.ue.setHeight(height);
    }

    /**
     * 设置编辑器的内容，可修改编辑器当前的html内容
     * @param html 要插入的html内容
     * @param isAppendTo 若传入true，不清空原来的内容，在最后插入内容，否则，清空内容再插入
     */
    setContent (html: string, isAppendTo: boolean = false): any {
        this.ue && this.ue.setContent(html, isAppendTo);
    }

    /**
     * 获取编辑器html内容
     */
    getContent (): any {
        return this.ue && this.ue.getContent();
    }

    /**
     * 获取编辑器纯文本内容
     */
    getContentTxt (): any {
        return this.ue && this.ue.getContentTxt();
    }

    /**
     * 获取编辑器带格式的纯文本内容
     */
    getPlainTxt (): any {
        return this.ue && this.ue.getPlainTxt();
    }

    /**
     * 判断编辑器是否有内容
     */
    hasContents (): any {
        return this.ue && this.ue.hasContents();
    }

    /**
     * 让编辑器获得焦点
     */
    focus (): any {
        this.ue && this.ue.focus();
    }

    /**
     * 让编辑器失去焦点
     */
    blur (): any {
        this.ue && this.ue.blur();
    }

    /**
     * 判断编辑器是否获得焦点
     */
    isFocus (): any {
        return this.ue && this.ue.isFocus();
    }

    /**
     * 设置当前编辑区域不可编辑
     */
    setDisabled (): any {
        this.ue && this.ue.setDisabled();
    }

    /**
     * 设置当前编辑区域可以编辑
     */
    setEnabled (): any {
        this.ue && this.ue.setEnabled();
    }

    /**
     * 隐藏编辑器
     */
    setHide (): any {
        this.ue && this.ue.setHide();
    }

    /**
     * 显示编辑器
     */
    setShow (): any {
        this.ue && this.ue.setShow();
    }

    /**
     * 获得当前选中的文本
     */
    getSelectionText (): any {
        return this.ue && this.ue.selection.getText();
    }

    /**
     * 执行命令
     * @param command
     * @param content
     */
    executeCommand (command: string, content?: string) {
        if (content) {
            this.ue && this.ue.execCommand(command, content);
        } else {
            this.ue && this.ue.execCommand(command);
        }
    }


    // 以下实现ControlValueAccessor接口的方法
    writeValue (value: string): void {
        this.text = value;
    }

    registerOnChange (fn: any): void {
    }

    registerOnTouched (fn: any): void {
    }
}
