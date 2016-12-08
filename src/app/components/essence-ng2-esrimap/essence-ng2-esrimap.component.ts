import {Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, AfterContentChecked} from '@angular/core';

import {EssenceNg2EsriMapService} from "./essence-ng2-esrimap.service";

@Component({
    selector: 'essence-ng2-esrimap',
    templateUrl: './essence-ng2-esrimap.template.html',
    styleUrls: ['./essence-ng2-esrimap.style.scss']
})
export class EssenceNg2EsriMapComponent implements OnInit {
    @ViewChild('map') mapEl: ElementRef;
    map: any;
    index: number = 0;

    // 编辑器准备就绪后会触发该事件
    @Output()
    mapReady: EventEmitter<any> = new EventEmitter<any>(false);

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

    loadEsriApi (): any {
        return this.esriService.loadEsriApi();
    }

    loadEsriModules (modules: any): any {
        return this.esriService.loadEsriModules(modules);
    }

    initMap (): void {
        this.loadEsriModules(['esri/map', "esri/geometry/Extent"]).then(([Map, Extent]) => {
            this.map = new Map(this.mapEl.nativeElement, {
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
                this.mapReady.emit(this.map);
            });
        });
    }
}
