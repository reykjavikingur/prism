import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {PrismStoreService} from "../prism-store.service";
import {Category} from "../category";

@Component({
	selector: 'prism-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

	private categories: Array<Category>;

	private sub: Subscription;

	constructor(private prismStore: PrismStoreService) {
	}

	ngOnInit() {

		this.sub = this.prismStore.model.subscribe(value => {
			this.categories = value.categories;
		});

	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
