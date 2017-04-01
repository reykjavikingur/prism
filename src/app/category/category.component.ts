import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismModel} from "../prism-model";
import {PrismStoreService} from "../prism-store.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription, Observable} from "rxjs";
import {Category} from "../category";
import {Example} from "../example";

@Component({
	selector: 'prism-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

	private paramsSub: Subscription;

	private activeCategory: Observable<Category>;

	private activeCategoryName: Observable<String>;

	private activeExamples: Observable<Array<Example>>;

	constructor(private prismStore: PrismStoreService,
				private route: ActivatedRoute) {
		this.activeCategory = this.prismStore.activeCategory;
		this.activeExamples = this.prismStore.activeExamples;

		this.activeCategoryName = this.activeCategory.map(value => {
			return value.name;
		});
	}

	public ngOnInit() {
		this.paramsSub = this.route.params.subscribe(params => {
			this.prismStore.selectCategory(params['categoryName']);
		});
	}

	public ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

}
