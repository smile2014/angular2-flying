import {Component, OnInit, ViewChild} from '@angular/core';
import {EssenceNg2EsriMapComponent} from "../../../components";

@Component({
    templateUrl: './esri-map.component.html',
    styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {
    @ViewChild('map1') map1: EssenceNg2EsriMapComponent;
    @ViewChild('map2') map2: EssenceNg2EsriMapComponent;

    constructor () {}

    ngOnInit () {
    }
}
