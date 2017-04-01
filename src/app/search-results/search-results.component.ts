import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PrismStoreService} from "../prism-store.service";
import {Subscription, Observable} from "rxjs";
import {Example} from "../example";

@Component({
	selector: 'prism-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

	private paramSub: Subscription;

	private query: Observable<string>;

	private examples: Observable<Array<Example>>;

	constructor(private route: ActivatedRoute,
				private prismStore: PrismStoreService) {
		this.examples = this.prismStore.activeExamples;
		this.query = this.prismStore.activeSearch.map(value => value.query);
	}

	ngOnInit() {
		this.paramSub = this.route.params.subscribe(params => {
			this.prismStore.search(params['query']);
		});
	}

	ngOnDestroy() {
		this.paramSub.unsubscribe();
	}

}
