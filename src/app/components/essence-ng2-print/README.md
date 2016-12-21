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
	[btnClass]="{'btn': true, 'btn-info': true}"
	[printHTML]="table"
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

#### 输入属性

- `btnClass`：打印按钮class，传值与`[ngClass]`一样
- `printHTML`：打印的内容。可以是string，也可以是HTMLElement
- `printStyle`：打印内容style
- `printCSS`：打印内容css文件

### 事件

- `printComplete`：打印完成的事件
