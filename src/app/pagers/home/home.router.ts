/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BootstrapThemeComponent} from "./bootstrap-theme";
import {EditorDemoComponent} from "./editor-demo";
import {ChartDemoComponent} from "./chart-demo";

const homeRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home/editor',
		pathMatch: 'full'
	},
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'bootstrap',
				component: BootstrapThemeComponent
			},
			{
				path: 'editor',
				component: EditorDemoComponent
			},
			{
				path: 'lazy',
				loadChildren: 'app/pagers/home/lazy/lazy.module#LazyModule'
			},
			{
				path: 'chart',
				component: ChartDemoComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule {
}
