import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Example} from "../example";
import {Http, ResponseContentType, Response} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import {PrismStoreService} from "../prism-store.service";
import {PrismModel} from "../prism-model";

@Component({
	selector: 'prism-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnDestroy {

	private _example: Example;

	@Input()
	public set example(value: Example) {
		this._example = value;
		if (value && value.descriptionUrl) {
			this.description = this.http.get(value.descriptionUrl, {
				responseType: ResponseContentType.Text
			});
		}
		else {
			this.description = null;
		}
		if (value && value.sourceUrl) {
			this.source = this.http.get(value.sourceUrl, {
				responseType: ResponseContentType.Text
			});
		}
		else {
			this.source = null;
		}
	}

	public get example(): Example {
		return this._example;
	}

	private description: Observable<Response>;

	private source: Observable<Response>;

	private model: PrismModel;

	private modelSub: Subscription;

	constructor(private http: Http,
				private prismStore: PrismStoreService) {
	}

	ngOnInit() {
		this.modelSub = this.prismStore.model.subscribe(value => {
			this.model = value;
		});
	}

	ngOnDestroy() {
		this.modelSub.unsubscribe();
	}

}
