# essence-ng2-print

This is a page print component for Angular2.

## 依赖
```json
{
  "typescript": ">=2.0.3",
  "angular2": ">=2.2.1"
}
```

## 用法

### module中导入
```typescript
import {EssenceNg2PrintModule} from "../../components/essence-ng2-print";
@NgModule({
    imports: [
        EssenceNg2PrintModule
    ]
})
```

### template中使用
```html
<table #table class="table table-striped">
	<thead>
		<tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Username</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="let user of datas; let i = index">
			<td>{{i}}</td>
			<td>{{user?.firstName}}</td>
			<td>{{user?.lastName}}</td>
			<td>{{user?.userName}}</td>
		</tr>
	</tbody>
</table>

<essence-ng2-print
		[showBtn]="true"
		[btnText]="'内置打印'"
		[btnClass]="{'btn': true, 'btn-info': true}"
		[printHTML]="div"
		[printStyle]="printStyle"
		[printCSS]="printCSS"
		(printComplete)="printComplete()">
</essence-ng2-print>
```

### 对应的component
```typescript
datas: any[];
printCSS: string[];
printStyle: string;

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

	this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
	this.printStyle =
		`
		th, td {
			color: red !important;
		}
		`;
}

printComplete () {
	console.log('打印完成！');
}
```

## API说明

### 输入属性

- `showBtn`（`?boolean=true`） - 如果为`true`将显示按钮
- `btnText`（`?string='打印'`） - 按钮显示的文本
- `btnClass`（`?Object={"print-btn": true,"print-btn-success": true};`） - 打印按钮class，传值与`[ngClass]`一样
- `printHTML`（`string|HTMLElement`） - 打印的内容
- `printStyle`（`?string`） - 打印内容style。将写进打印页面的style标签中
- `printCSS`（`?Array<string>`） - 打印内容css文件路径。将在打印页面生成link标签，支持相对路径

### 实例方法

- `print` - 开始打印内容

### 事件

- `printComplete` - 打印完成的事件
