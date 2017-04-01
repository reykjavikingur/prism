import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismModel} from "../prism-model";
import {PrismStoreService} from "../prism-store.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../category";
import {Example} from "../example";

@Component({
	selector: 'prism-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

	private paramsSub: Subscription;

	private activeCategory: Category;

	private activeCategorySub: Subscription;

	private activeExamples: Array<Example>;

	private activeExamplesSub: Subscription;

	constructor(private prismStore: PrismStoreService,
				private route: ActivatedRoute) {
	}

	public ngOnInit() {

		this.paramsSub = this.route.params.subscribe(params => {
			this.prismStore.selectCategory(params['categoryName']);
		});

		this.activeCategorySub = this.prismStore.activeCategory.subscribe(value => {
			this.activeCategory = value;
		});

		this.activeExamplesSub = this.prismStore.activeExamples.subscribe(value => {
			this.activeExamples = value;
		});

	}

	public ngOnDestroy() {
		this.paramsSub.unsubscribe();
		this.activeCategorySub.unsubscribe();
		this.activeExamplesSub.unsubscribe();
	}

}
