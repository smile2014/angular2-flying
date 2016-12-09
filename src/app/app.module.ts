import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.router";
import {LoginComponent} from './pagers';

@NgModule({
    imports: [
        BrowserModule, // 除了在根模块中导入BrowserModule，在其它特性模块中改为导入CommonModule
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
