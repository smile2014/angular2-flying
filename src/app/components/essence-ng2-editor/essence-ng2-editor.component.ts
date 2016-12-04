import {
    Component, OnInit, OnDestroy, ElementRef, Renderer, Self, Input, Output, EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NgModel} from "@angular/forms";

declare var UE: any;

@Component({
    selector: 'essence-ng2-editor[ngModel]',
    templateUrl: './essence-ng2-editor.template.html',
    styleUrls: ['./essence-ng2-editor.style.scss'],
    providers: [NgModel]
})
export class EssenceNg2EditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
    ue: any = null;
    width: number = 0;
    height: number = 0;
    text: string;
    cd: NgModel;
    renderer: Renderer;
    elementRef: ElementRef;

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
    set ueWidth (width: number) {
        this.width = width;
    }

    get ueWidth (): number {
        return this.width;
    }

    @Input()
    set ueHeight (height: number) {
        this.height = height;
        this.setHeight(height);
    }

    get ueHeight (): number {
        return this.height;
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
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', this.width + "px");
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', this.height + "px");
        this.ue = UE.getEditor(this.elementRef.nativeElement.id);

        // 注册事件
        this.ue.addListener('ready', (editor: any) => {
            this.setContent(this.text);
            this.ready.emit(editor);
			this.focus();
        });

        this.ue.addListener('destroy', (editor: any) => {
            this.destroy.emit(true);
        });

        this.ue.addListener('reset', (editor: any) => {
            this.reset.emit(true);
        });

        this.ue.addListener('focus', (editor: any) => {
            this.focusEvent.emit(true);
        });

        this.ue.addListener('langReady', (editor: any) => {
            this.langReady.emit(true);
        });

        this.ue.addListener('beforeExecCommand', (editor: any) => {
            this.beforeExecCommand.emit(true);
        });

        this.ue.addListener('afterExecCommand', (editor: any) => {
            this.afterExecCommand.emit(true);
        });

        this.ue.addListener('firstBeforeExecCommand', (editor: any) => {
            this.firstBeforeExecCommand.emit(true);
        });

        this.ue.addListener('beforeGetContent', (editor: any) => {
            this.beforeGetContent.emit(true);
        });

        this.ue.addListener('afterGetContent', (editor: any) => {
            this.afterGetContent.emit(true);
        });

        this.ue.addListener('getAllHtml', (editor: any) => {
            this.getAllHtml.emit(true);
        });

        this.ue.addListener('beforeSetContent', (editor: any) => {
            this.beforeSetContent.emit(true);
        });

        this.ue.addListener('afterSetContent', (editor: any) => {
            this.afterSetContent.emit(true);
        });

        this.ue.addListener('selectionchange', (editor: any) => {
            this.selectionchange.emit(true);
        });

        this.ue.addListener('beforeSelectionChange', (editor: any) => {
            this.beforeSelectionChange.emit(true);
        });

        this.ue.addListener('afterSelectionChange', (editor: any) => {
            this.afterSelectionChange.emit(true);
        });

        this.ue.addListener('contentChange', () => {
            this.writeValue(this.getContent());
            this.cd.viewToModelUpdate(this.getContent());
            this.contentChange.emit(this.getContent());
        });
    }

    ngOnDestroy () {
        this.ue.destroy();
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

    // 以下实现ControlValueAccessor接口的方法
    writeValue (value: string): void {
        this.text = value;
    }

    registerOnChange (fn: any): void {}

    registerOnTouched (fn: any): void {}
}
