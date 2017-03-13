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

	private model: PrismModel;

	private modelSub: Subscription;

	private paramsSub: Subscription;

	private activeCategoryName: String;

	private activeCategory: Category;

	constructor(private prismStore: PrismStoreService,
				private route: ActivatedRoute) {
	}

	public ngOnInit() {

		this.paramsSub = this.route.params.subscribe(params => {
			this.activeCategoryName = params['categoryName'];
			this.updateActiveCategory();
		});

		this.modelSub = this.prismStore.model.subscribe((value) => {
			this.model = value;
			this.updateActiveCategory();
		});

	}

	public ngOnDestroy() {
		this.paramsSub.unsubscribe();
		this.modelSub.unsubscribe();
	}

	private updateActiveCategory() {
		if (this.model && this.activeCategoryName) {
			this.activeCategory = this.model.findCategory(this.activeCategoryName);
		}
		else {
			this.activeCategory = null;
		}
	}

}
