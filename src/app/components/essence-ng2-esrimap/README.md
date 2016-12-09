# essence-ng2-esrimap

This is a EsriMap component for Angular2.

## 依赖
```json
{
  "typescript": ">=2.0.3",
  "angular2": ">=2.2.1",
  "ArcGIS API for JavaScript": ">=3.14"
}
```

[ArcGIS API for JavaScript : https://developers.arcgis.com/javascript/3/](https://developers.arcgis.com/javascript/3/)

## 用法

### index.html引入esri.css
```html
<link rel="stylesheet" href="http://js.arcgis.com/3.18/esri/css/esri.css">
```

### module中导入
```typescript
import {EssenceNg2EsriMapModule} from "../components/essence-ng2-esrimap";
@NgModule({
    imports: [
        EssenceNg2EsriMapModule
    ]
})
```

### template中使用
```html
<essence-ng2-esrimap (ready)="ready($event)"></essence-ng2-esrimap>
```

### 对应的component
```typescript
esriMapComponent: any;
SimpleMarkerSymbol: any;
Graphic: any;

ready ($event) {
    this.esriMapComponent = $event;
    this.esriMapComponent.loadEsriModules([
        "esri/symbols/SimpleMarkerSymbol",
        "esri/graphic"])
        .then(([
            SimpleMarkerSymbol,
            Graphic
        ]) => {
            this.SimpleMarkerSymbol = SimpleMarkerSymbol;
            this.Graphic = Graphic;
        });
}
```

## API说明

### 实例的属性与方法

#### 属性

- `map`：当前地图对象

#### 方法

- `loadEsriModules`：加载ArcGIS API for JavaScript的模块，如：'esri/map'

### 事件

- `ready`：地图初始化完成后会触发该事件，参数$event为当前component实例对象