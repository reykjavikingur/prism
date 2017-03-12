import {Component, OnInit} from '@angular/core';
import {PrismStoreService} from "./prism-store.service";
import {PrismModel} from "./prism-model";

@Component({
	selector: 'prism-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private model: PrismModel;

	constructor(private prismStore: PrismStoreService) {
	}

	public ngOnInit() {

		this.prismStore.model.subscribe((value) => {
			this.model = value;
		});

		this.loadExamples();
	}

	private loadExamples() {
		this.prismStore.initializeModel();
	}

}
