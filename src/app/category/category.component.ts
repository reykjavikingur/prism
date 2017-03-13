import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismModel} from "../prism-model";
import {PrismStoreService} from "../prism-store.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: 'prism-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

	private model: PrismModel;

	private modelSub: Subscription;

	private paramsSub: Subscription;

	private activeCategory: String;

	constructor(private prismStore: PrismStoreService,
				private route: ActivatedRoute) {
	}

	public ngOnInit() {

		this.paramsSub = this.route.params.subscribe(params => {
			let categoryName = params['categoryName'];
			this.activeCategory = categoryName;
		});

		this.modelSub = this.prismStore.model.subscribe((value) => {
			this.model = value;
		});

	}

	public ngOnDestroy() {
		this.paramsSub.unsubscribe();
		this.modelSub.unsubscribe();
	}

}
