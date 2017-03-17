import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismModel} from "../prism-model";
import {PrismStoreService} from "../prism-store.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../category";

@Component({
	selector: 'prism-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

	private paramsSub: Subscription;

	private model: PrismModel;

	private modelSub: Subscription;

	private activeCategory: Category;

	private activeCategorySub: Subscription;

	constructor(private prismStore: PrismStoreService,
				private route: ActivatedRoute) {
	}

	public ngOnInit() {

		this.paramsSub = this.route.params.subscribe(params => {
			this.prismStore.selectCategory(params['categoryName']);
		});

		this.modelSub = this.prismStore.model.subscribe((value) => {
			this.model = value;
		});

		this.activeCategorySub = this.prismStore.activeCategory.subscribe(value => {
			this.activeCategory = value;
		});

	}

	public ngOnDestroy() {
		this.paramsSub.unsubscribe();
		this.modelSub.unsubscribe();
		this.activeCategorySub.unsubscribe();
	}

}
