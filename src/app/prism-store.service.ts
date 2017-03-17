import {Injectable} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {PrismModel} from "./prism-model";
import {Category} from "./category";

@Injectable()
export class PrismStoreService {

	private modelSubject: BehaviorSubject<PrismModel>;

	public get model(): Observable<PrismModel> {
		return this.modelSubject.asObservable();
	}

	private activeCategorySubject: BehaviorSubject<Category>;

	public get activeCategory(): Observable<Category> {
		return this.activeCategorySubject.asObservable();
	}

	private activeCategoryName: string;

	constructor() {
		this.modelSubject = new BehaviorSubject(null);
		this.activeCategorySubject = new BehaviorSubject(null);
	}

	public initializeModel() {
		let model = PrismModel.fromRecord(prismConfig.data);
		this.modelSubject.next(model);
		this.updateActiveCategory();
	}

	public selectCategory(name: string) {
		this.activeCategoryName = name;
		this.updateActiveCategory();
	}

	private updateActiveCategory() {
		let model = this.modelSubject.getValue();
		if (model) {
			let category = model.findCategory(this.activeCategoryName);
			this.activeCategorySubject.next(category);
		}
	}

}
