import {Component, OnInit, ViewChild} from '@angular/core';
import {EssenceNg2EsriMapComponent} from "../../../components";

@Component({
    templateUrl: './esri-map.component.html',
    styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {
    @ViewChild(EssenceNg2EsriMapComponent) esriMap: EssenceNg2EsriMapComponent;
    map: any;
    SimpleMarkerSymbol: any;
    Graphic: any;

    constructor () {}

    ngOnInit () {
    }

    mapReady ($event) {
        this.map = $event;
        this.esriMap.loadEsriModules([
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

    getExtent (): void {
        console.log(this.map.extent);
    }

    addPoint (): void {

    }

}
