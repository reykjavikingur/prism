import {Component, OnInit} from '@angular/core';
import {PrismStoreService} from "../prism-store.service";

@Component({
	selector: 'prism-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	private searchQuery: string;

	constructor(private prismStore: PrismStoreService) {
	}

	ngOnInit() {
	}

	private doSearch() {
		this.prismStore.search(this.searchQuery);
	}

}
