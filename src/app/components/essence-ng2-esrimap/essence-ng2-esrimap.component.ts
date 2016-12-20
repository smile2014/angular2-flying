import {Component, OnInit, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';

import {EssenceNg2EsriMapService} from "./essence-ng2-esrimap.service";

@Component({
    selector: 'essence-ng2-esrimap',
    templateUrl: './essence-ng2-esrimap.component.html',
    styleUrls: ['./essence-ng2-esrimap.component.scss']
})
export class EssenceNg2EsriMapComponent implements OnInit {
    // esri modules
    Map: any;
    Extent: any;
    TileInfo: any;

    @ViewChild('map') mapEle: ElementRef;
    map: any;

    mapInfo: any = {};

    // 地图初始化完成之后触发该事件
    @Output()
    ready: EventEmitter<any> = new EventEmitter<any>(false);

    constructor (private esriService: EssenceNg2EsriMapService) {}

    ngOnInit () {
        if (this.map) {
            return;
        }

        if (!this.esriService.isLoad) {
            this.loadEsriApi().then(() => {
                this.initMap();
                // this.getTdtLayer();
            });
        } else {
            this.initMap();
        }
    }

    private loadEsriApi (): any {
        return this.esriService.loadEsriApi();
    }

    private initMap (): void {
        this.loadEsriModules(['esri/map', "esri/geometry/Extent"]).then(([Map, Extent]) => {
            this.Map = Map;
            this.Extent = Extent;
            this.map = new Map(this.mapEle.nativeElement, {
                extent: new Extent({
                    xmin: 5606692.635760968,
                    ymin: 1545885.5138556694,
                    xmax: 16760383.803130921,
                    ymax: 7416249.286155645,
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857
                    }
                }),
                basemap: 'dark-gray'
            });
            this.map.on("load", () => {
                this.ready.emit(this);
            });
        });
    }

    /**
     * 加载arcgis api for javascript的模块
     * @param modules
     * @returns {any}
     */
    loadEsriModules (modules: any): any {
        return this.esriService.loadEsriModules(modules);
    }

    getTdtLayer () {
        this.loadEsriModules([
            "esri/layers/TileInfo",
            "esri/layers/WebTiledLayer"])
            .then(([
                TileInfo,
                WebTiledLayer
            ]) => {
                this.TileInfo = TileInfo;
                let tileInfo: any = new TileInfo({
                    rows: 256,
                    cols: 256,
                    compressionQuality: 0,
                    origin: {
                        x: -180,
                        y: 90
                    },
                    spatialReference: {
                        wkid: 4326
                    },
                    lods: [
                        {"level": 2, "resolution": 0.3515625, "scale": 147748796.52937502},
                        {"level": 3, "resolution": 0.17578125, "scale": 73874398.264687508},
                        {"level": 4, "resolution": 0.087890625, "scale": 36937199.132343754},
                        {"level": 5, "resolution": 0.0439453125, "scale": 18468599.566171877},
                        {"level": 6, "resolution": 0.02197265625, "scale": 9234299.7830859385},
                        {"level": 7, "resolution": 0.010986328125, "scale": 4617149.8915429693},
                        {"level": 8, "resolution": 0.0054931640625, "scale": 2308574.9457714846},
                        {"level": 9, "resolution": 0.00274658203125, "scale": 1154287.4728857423},
                        {"level": 10, "resolution": 0.001373291015625, "scale": 577143.73644287116},
                        {"level": 11, "resolution": 0.0006866455078125, "scale": 288571.86822143558},
                        {"level": 12, "resolution": 0.00034332275390625, "scale": 144285.93411071779},
                        {"level": 13, "resolution": 0.000171661376953125, "scale": 72142.967055358895},
                        {"level": 14, "resolution": 8.58306884765625e-005, "scale": 36071.483527679447},
                        {"level": 15, "resolution": 4.291534423828125e-005, "scale": 18035.741763839724},
                        {"level": 16, "resolution": 2.1457672119140625e-005, "scale": 9017.8708819198619},
                        {"level": 17, "resolution": 1.0728836059570313e-005, "scale": 4508.9354409599309},
                        {"level": 18, "resolution": 5.3644180297851563e-006, "scale": 2254.4677204799655}
                    ]
                });
                let subDomains: string[] = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
                let templateUrl: string = "http://${subDomain}.tianditu.com/DataServer?T=vec_c&X=${col}&Y=${row}&L=${level}";
                let tdt: any = new WebTiledLayer(templateUrl, {
                    id: "tdtId",
                    subDomains: subDomains,
                    tileInfo: tileInfo
                });
            });
    }
}
