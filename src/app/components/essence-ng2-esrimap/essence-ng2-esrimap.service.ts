import {Injectable} from '@angular/core';

import {EsriLoaderService} from 'angular2-esri-loader';

@Injectable()
export class EssenceNg2EsriMapService {

    isLoad: boolean = false;

    apiUrl: string = 'http://js.arcgis.com/3.18/';

    esriLoader: EsriLoaderService;

    constructor(esriLoader: EsriLoaderService) {
        this.esriLoader = esriLoader;
    }

    loadEsriApi(): any {
        return this.esriLoader.load({url: this.apiUrl})['then'](() => {
            this.isLoad = true;
        });
    }

    loadEsriModules(modules: any): any {
        return this.esriLoader.loadModules(modules);
    }
}
