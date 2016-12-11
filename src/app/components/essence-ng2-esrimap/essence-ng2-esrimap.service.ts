import {Injectable} from '@angular/core';

import {EsriLoaderService} from 'angular2-esri-loader';

@Injectable()
export class EssenceNg2EsriMapService {

    isLoad: boolean = false;

    // apiUrl: string = 'http://js.arcgis.com/3.18/';
	apiUrl: string = 'http://localhost:8000/arcgis/3.18/api/init.js'; // 这里是本地部署的，没有就用上面的CDN

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
