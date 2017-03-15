import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismStoreService} from "../prism-store.service";
import {PrismModel} from "../prism-model";
import {Subscription} from "rxjs";

@Component({
	selector: 'prism-style-guide',
	templateUrl: './style-guide.component.html',
	styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit, OnDestroy {

	private model: PrismModel;
	private modelSub: Subscription;

	constructor(private prismStore: PrismStoreService) {
	}

	public ngOnInit() {
		this.modelSub = this.prismStore.model.subscribe((value) => {
			this.model = value;
		});
	}

	public ngOnDestroy() {
		this.modelSub.unsubscribe();
	}

}
