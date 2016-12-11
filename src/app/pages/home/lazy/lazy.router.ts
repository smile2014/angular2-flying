/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LazyComponent} from "./lazy.component";

const lazyRoutes: Routes = [
	{
		path: '',
		component: LazyComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(lazyRoutes)
	],
	exports: [
		RouterModule
	]
})
export class LazyRoutingModule {
}
