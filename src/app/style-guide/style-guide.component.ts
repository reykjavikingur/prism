import {Component, OnInit} from '@angular/core';
import {PrismStoreService} from "../prism-store.service";
import {PrismModel} from "../prism-model";

@Component({
	selector: 'prism-style-guide',
	templateUrl: './style-guide.component.html',
	styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

	private model: PrismModel;

	constructor(private prismStore: PrismStoreService) {
	}

	public ngOnInit() {

		this.prismStore.model.subscribe((value) => {
			this.model = value;
		});

	}

}
