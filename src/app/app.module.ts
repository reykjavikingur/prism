import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PrismStoreService} from "./prism-store.service";
import { ExampleComponent } from './example/example.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { OverviewComponent } from './overview/overview.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent,
		CategoryListComponent,
		CategoryHeaderComponent,
		StyleGuideComponent,
		OverviewComponent,
		CategoryComponent
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
