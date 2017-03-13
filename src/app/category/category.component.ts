import {Component, OnInit} from '@angular/core';
import {PrismModel} from "../prism-model";
import {PrismStoreService} from "../prism-store.service";

@Component({
	selector: 'prism-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	private model: PrismModel;

	constructor(private prismStore: PrismStoreService) {
	}

	public ngOnInit() {

		this.prismStore.model.subscribe((value) => {
			this.model = value;
		});

	}

}
