import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismModel} from "../prism-model";
import {Subscription} from "rxjs";
import {PrismStoreService} from "../prism-store.service";

@Component({
	selector: 'prism-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit,OnDestroy {

	private model: PrismModel;

	private sub: Subscription;

	constructor(private prismStore: PrismStoreService) {
	}

	ngOnInit() {
		this.sub = this.prismStore.model.subscribe(value => {
			this.model = value;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
