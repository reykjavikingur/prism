import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismStoreService} from "../prism-store.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: 'prism-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

	private searchQuery: string;

	private sub: Subscription;

	constructor(private prismStore: PrismStoreService,
				private router: Router) {
	}

	ngOnInit() {
		this.sub = this.prismStore.activeSearch.subscribe(value => {
			if (!value) {
				this.searchQuery = null;
			}
		});

	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	private doSearch() {
		this.router.navigate(['/guide/search', this.searchQuery]);
	}

}
