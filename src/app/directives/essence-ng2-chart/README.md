# essence-ng2-chart

This is a Highcharts directive for Angular2.

## 依赖
```json
{
  "typescript": ">=2.0.3",
  "angular2": ">=2.2.1",
  "highcharts": ">=4.2"
}
```

## 安装
```bash
# install highcharts
npm i highcharts --save

# install required typings
npm i install @types/highcharts --save-dev
```

## 用法

### module中导入
```typescript
import {EssenceNg2ChartModule} from "../directives/essence-ng2-chart";
@NgModule({
    imports: [
        EssenceNg2ChartModule
    ]
})
```

### template中使用
```html
<div essence-ng2-chart [chart]="chart" [chart-theme]="theme" style="width: 37.5rem; height: 300px; margin: 0 auto; padding: 0"></div>
```

### 对应的component
```typescript
// chart主题
primaryColor: string = "#F1F1F1";
theme= {
    chart: {
        backgroundColor: "#1D89DA"
    },
    title: {
        style: {
            color: this.primaryColor,
            font: "bold 10px"
        }
    },
    xAxis: {
        labels: {
            style: {
                color: this.primaryColor
            }
        }
    },
    yAxis: {
        gridLineColor: "rgba(241, 241, 241, 0.5)",
        minorTickColor: this.primaryColor,
        labels: {
            style: {
                color: this.primaryColor
            }
        },
        tickWidth: 0
    },
    tooltip: {
        backgroundColor: "rgba(29, 137, 218, 0.75)",
        style: {
            color: this.primaryColor
        }
    },
    labels: {
        style: {
            color: this.primaryColor
        }
    }
};

// chart数据
categories = ["西冉村", "宝山", "苗寨", "四季青", "北坞村", "金河闸", "田村", "香山"];
datas = [100, 120, 130, 140, 250, 160, 230, 180];
chart = new HightChart({
    chart: {
        type: "column"
    },
    title: {
        text: ""
    },
    xAxis: {
        categories: this.categories,
        title: {
            text: null
        },
        tickLength: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        },
        labels: {
            align: "center"
        }
    },
    series: [{
        data: this.datas
    }],
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    tooltip: {
        enabled: false
    }
});
```


