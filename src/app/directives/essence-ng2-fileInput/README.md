# essence-ng2-fileInput

This is a bootstrap-fileinput directive for Angular2.

## 依赖
```json
{
  "typescript": ">=2.0.3",
  "angular2": ">=2.2.1",
  "bootstrap": "3.x",
  "jquery": "Latest",
  "bootstrap-fileinput": ">=4.3.4"
}
```

[bootstrap-fileinput: http://plugins.krajee.com/file-input](http://plugins.krajee.com/file-input)

## 用法

### index.html引入UEditor
```html
// css
<link rel="stylesheet" href="./assets/scripts/bootstrap-fileinput/css/fileinput.min.css">

// script
<script src="./assets/scripts/bootstrap-fileinput/js/plugins/canvas-to-blob.min.js"></script>
<script src="./assets/scripts/bootstrap-fileinput/js/plugins/sortable.min.js"></script>
<script src="./assets/scripts/bootstrap-fileinput/js/plugins/purify.min.js"></script>
<script src="./assets/scripts/bootstrap-fileinput/js/fileinput.min.js"></script>
<script src="./assets/scripts/bootstrap-fileinput/themes/fa/theme.js"></script>
<script src="./assets/scripts/bootstrap-fileinput/js/locales/zh.js"></script>
```

### module中导入
```typescript
import {EssenceNg2FileInputModule} from "../directives/essence-ng2-fileInput";
@NgModule({
    imports: [
        EssenceNg2FileInputModule
    ]
})
```

### template中使用
```html
<input id="pic_file" type="file" class="file" multiple
       [essence-ng2-fileInput]="fileInputOpts"
       (ready)="ready($event)"
       (filebatchuploadcomplete)="filebatchuploadcomplete($event)"
       (filebatchuploaderror)="filebatchuploaderror($event)"
       (fileuploaded)="fileuploaded($event)"
       (fileuploaderror)="fileuploaderror($event)">
```

### 对应的component
```typescript
fileInputOpts: any = {
    uploadUrl: "/App/Goods/UploadImges",
    uploadAsync: true,
    language: "zh",
    showCaption: false,
    showRemove: false,
    showPreview: true,
    previewFileType: "image",
    browseLabel: "选择图片",
    browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i>",
    uploadClass: "btn btn-success",
    uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i>"
};

ready ($event: any) {
    console.log($event);
}

filebatchuploadcomplete ($event: any) {
    console.log($event);
}

filebatchuploaderror ($event: any) {
    console.log($event);
}

fileuploaded ($event: any) {
    console.log($event);
}

fileuploaderror ($event: any) {
    console.log($event);
}
```

## API说明

### 属性

**essence-ng2-fileInput**接收的参数与**bootstrap-fileinput**的属性一模一样。

### 事件（更多的事件根据需求再添加）

- ready - fileinput初始化完成的事件，$event为当前fileinput的juqery对象
- fileuploaded - 单个文件上传成功的事件，$event = {event: event, data: data, previewId: previewId, index: index}
- fileuploaderror - 单个文件上传失败的事件 $event = {event: event, data: data, msg: msg}
- filebatchuploadcomplete - 批量文件上传成功的事件，$event = {event: event, data: data, previewId: previewId, index: index}
- filebatchuploaderror - 批量文件上传失败的事件 $event = {event: event, data: data, msg: msg}