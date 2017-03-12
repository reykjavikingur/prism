import {Injectable} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {PrismModel} from "./prism-model";

@Injectable()
export class PrismStoreService {

	private subject: BehaviorSubject<PrismModel>;

	private _model: Observable<PrismModel>;

	public get model(): Observable<PrismModel> {
		return this._model;
	}

	constructor() {
		this.subject = new BehaviorSubject(null);
		this._model = this.subject.asObservable();
	}

	public initializeModel() {
		let model = PrismModel.fromRecord(prismConfig.data);
		this.subject.next(model);
	}

}
