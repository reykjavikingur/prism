import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StyleGuideComponent} from "./style-guide/style-guide.component";
import {OverviewComponent} from "./overview/overview.component";
import {CategoryComponent} from "./category/category.component";
import {SearchResultsComponent} from "./search-results/search-results.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'guide'
	},
	{
		path: 'guide',
		component: StyleGuideComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'overview'
			},
			{
				path: 'overview',
				component: OverviewComponent
			},
			{
				path: 'category/:categoryName',
				component: CategoryComponent
			},
			{
				path: 'search/:query',
				component: SearchResultsComponent
			}
		]
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
