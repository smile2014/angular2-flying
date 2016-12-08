import {Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, AfterContentChecked} from '@angular/core';

import {EssenceNg2EsriMapService} from "./essence-ng2-esrimap.service";

@Component({
    selector: 'essence-ng2-esrimap',
    templateUrl: './essence-ng2-esrimap.template.html',
    styleUrls: ['./essence-ng2-esrimap.style.scss']
})
export class EssenceNg2EsriMapComponent implements OnInit {
    @ViewChild('map') mapEle: ElementRef;
    map: any;
    index: number = 0;

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

    loadEsriModules (modules: any): any {
        return this.esriService.loadEsriModules(modules);
    }
}
