import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {PrismStoreService} from "../prism-store.service";
import {Category} from "../category";
import {ActivatedRoute} from "@angular/router";
import {Search} from "../search";

@Component({
	selector: 'prism-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

	private categories: Array<Category>;

	private categoriesSub: Subscription;

	private activeCategory: Category;

	private activeCategorySub: Subscription;

	private activeSearch: Search;

	private activeSearchSub: Subscription;

	constructor(private prismStore: PrismStoreService) {
	}

	ngOnInit() {

		this.categoriesSub = this.prismStore.model.subscribe(value => {
			this.categories = value.categories;
		});

		this.activeCategorySub = this.prismStore.activeCategory.subscribe(value => {
			this.activeCategory = value;
		});

		this.activeSearchSub = this.prismStore.activeSearch.subscribe(value => {
			this.activeSearch = value;
		});

	}

	ngOnDestroy() {
		this.categoriesSub.unsubscribe();
		this.activeCategorySub.unsubscribe();
		this.activeSearchSub.unsubscribe();
	}

}
