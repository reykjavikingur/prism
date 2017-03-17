import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PrismStoreService} from "./prism-store.service";
import {ExampleComponent} from './example/example.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {StyleGuideComponent} from './style-guide/style-guide.component';
import {OverviewComponent} from './overview/overview.component';
import {CategoryComponent} from './category/category.component';
import {SafeUrlPipe} from './safe-url.pipe';
import {ResponseTextPipe} from './response-text.pipe';
import {FormatMarkupPipe} from './format-markup.pipe';
import {DropdownModule} from "ng2-bootstrap";

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent,
		CategoryListComponent,
		StyleGuideComponent,
		OverviewComponent,
		CategoryComponent,
		SafeUrlPipe,
		ResponseTextPipe,
		FormatMarkupPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		DropdownModule.forRoot()
	],
	providers: [
		PrismStoreService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
