import {Component, OnInit} from '@angular/core';
import {PrismStoreService} from "./prism-store.service";

@Component({
	selector: 'prism-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private list;

	constructor(private prismStore: PrismStoreService) {
	}

	public ngOnInit() {

		this.prismStore.examples.subscribe((r) => {
			this.list = r;
		});

		this.loadExamples();
	}

	private loadExamples() {
		this.prismStore.initialize();
	}

}
