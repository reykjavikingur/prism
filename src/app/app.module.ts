import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PrismStoreService} from "./prism-store.service";
import { ExampleComponent } from './example/example.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		PrismStoreService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
