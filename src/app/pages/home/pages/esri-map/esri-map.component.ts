import {Component, OnInit, ViewChild} from '@angular/core';
import {EssenceNg2EsriMapComponent} from "../../../components";

@Component({
    templateUrl: 'esri-map.component.html',
    styleUrls: ['esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {
    esriMapComponent: any;
    SimpleMarkerSymbol: any;
    Graphic: any;

    constructor () {}

    ngOnInit () {
    }

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

    getExtent (): void {
        console.log(this.esriMapComponent.map.extent);
    }
}
