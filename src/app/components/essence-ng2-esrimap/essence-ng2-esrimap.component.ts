import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {EssenceNg2EsriMapService} from "./essence-ng2-esrimap.service";

@Component({
    selector: 'essence-ng2-esrimap',
    templateUrl: './essence-ng2-esrimap.template.html',
    styleUrls: ['./essence-ng2-esrimap.style.scss']
})
export class EssenceNg2EsriMapComponent implements OnInit {
    @ViewChild('map') mapEl: ElementRef;
    map: any;
    isLoad: boolean = false;

    constructor (private esriService: EssenceNg2EsriMapService) {
        this.isLoad = this.esriService.isLoad;
    }

    ngOnInit () {
        if (this.map) {
            return;
        }

        if (!this.isLoad) {
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
        this.loadEsriModules(['esri/map']).then(([Map]) => {
            this.map = new Map(this.mapEl.nativeElement, {
                center: [-118, 34.5],
                zoom: 8,
                basemap: 'dark-gray'
            });
        });
    }
}
