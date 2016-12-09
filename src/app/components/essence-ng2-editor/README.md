# essence-ng2-editor

This is a UEditor component for Angular2.

## 依赖
```json
{
  "typescript": ">=2.0.3",
  "angular2": ">=2.2.1",
  "UEditor": ">=1.4.3.3 Jsp版 UTF-8版"
}
```

[UEditor: http://ueditor.baidu.com/website/index.html](http://ueditor.baidu.com/website/index.html)

## 用法

### index.html引入UEditor
```html
// index.html引用
<script src="./assets/scripts/ueditor/ueditor.config.js"></script>
<script src="./assets/scripts/ueditor/ueditor.all.min.js"></script>
```

### module中导入
```typescript
import {EssenceNg2EditorModule} from "../components/essence-ng2-editor";
@NgModule({
    imports: [
        EssenceNg2EditorModule
    ]
})
```

### template中使用
```html
<essence-ng2-editor [(ngModel)]="model_text"
                    [ueWidth]="e_width"
                    [ueHeight]="e_height"
                    (contentChange)="contentChange($event)"
                    (ready)="editorReady($event)">
</essence-ng2-editor>
```

### 对应的component
```typescript
e_width: number = 1024;
e_height: number = 500;
model_text: string = "<p style='color: red;'>ngmodel</p>";

contentChange ($event) {
    console.log($event);
}

editorReady ($event) {
    console.log($event);
}
```

## API说明

### 属性

- [(ngModel)]：绑定编辑器内容
- ueWidth：编辑器宽度（纯数字，不带单位）
- ueHeight：编辑器高度（纯数字，不带单位）

### 事件

- // 编辑器准备就绪后会触发该事件

@Output()
ready: EventEmitter<any> = new EventEmitter<any>(false);

- // 执行destroy方法,会触发该事件

@Output()
destroy: EventEmitter<any> = new EventEmitter<any>(false);

- // 执行reset方法,会触发该事件

@Output()
reset: EventEmitter<any> = new EventEmitter<any>(false);

- // 执行focus方法,会触发该事件
@Output()
focusEvent: EventEmitter<any> = new EventEmitter<any>(false);

- // 语言加载完成会触发该事件
@Output()
langReady: EventEmitter<any> = new EventEmitter<any>(false);

- // 运行命令之后会触发该命令
@Output()
beforeExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

- // 运行命令之后会触发该命令
@Output()
afterExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

- // 运行命令之前会触发该命令
@Output()
firstBeforeExecCommand: EventEmitter<any> = new EventEmitter<any>(false);

- // 在getContent方法执行之前会触发该事件
@Output()
beforeGetContent: EventEmitter<any> = new EventEmitter<any>(false);

- // 在getContent方法执行之后会触发该事件
@Output()
afterGetContent: EventEmitter<any> = new EventEmitter<any>(false);

- // 在getAllHtml方法执行时会触发该事件
@Output()
getAllHtml: EventEmitter<any> = new EventEmitter<any>(false);

- // 在setContent方法执行之前会触发该事件
@Output()
beforeSetContent: EventEmitter<any> = new EventEmitter<any>(false);

- // 在setContent方法执行之后会触发该事件
@Output()
afterSetContent: EventEmitter<any> = new EventEmitter<any>(false);

- // 每当编辑器内部选区发生改变时，将触发该事件
// 警告： 该事件的触发非常频繁，不建议在该事件的处理过程中做重量级的处理
@Output()
selectionchange: EventEmitter<any> = new EventEmitter<any>(false);

- // 在所有selectionchange的监听函数执行之前，会触发该事件
@Output()
beforeSelectionChange: EventEmitter<any> = new EventEmitter<any>(false);

- // 在所有selectionchange的监听函数执行完之后，会触发该事件
@Output()
afterSelectionChange: EventEmitter<any> = new EventEmitter<any>(false);

- // 编辑器内容发生改变时会触发该事件
@Output()
contentChange: EventEmitter<any> = new EventEmitter<any>(false);

### 实例方法（更多的方法根据需求再添加）

```typescript
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
```