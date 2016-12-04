/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from "@angular/common";

import {LazyComponent} from './lazy.component';
import {LazyRoutingModule} from "./lazy.router";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		LazyRoutingModule
	],
	declarations: [
		LazyComponent
	],
	providers: []
})
export class LazyModule {
}
