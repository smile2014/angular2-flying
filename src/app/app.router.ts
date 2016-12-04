/**
 * Created by laixiangran on 2016/11/26.
 * homepage：http://www.laixiangran.cn
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./pagers";

const appRoutes:Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './pagers/home/home.module#HomeModule'
	},
	{
		path: 'login',
		component: LoginComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
