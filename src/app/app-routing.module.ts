import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryHeaderComponent} from "./category-header/category-header.component";

const routes: Routes = [
	{
		path: '',
		children: []
	},
	{
		path: 'category/:categoryName',
		component: CategoryHeaderComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: true
	})],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {
}
