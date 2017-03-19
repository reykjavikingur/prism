import {Injectable} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {PrismModel} from "./prism-model";
import {Category} from "./category";
import {PrismPreferences} from "./prism-preferences";

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

	public get preferences(): Observable<PrismPreferences> {
		return this.preferencesSubject.asObservable();
	}

	private preferencesSubject: BehaviorSubject<PrismPreferences>;

	constructor() {
		this.modelSubject = new BehaviorSubject(null);
		this.activeCategorySubject = new BehaviorSubject(null);
		let defaultPreferences = new PrismPreferences();
		this.preferencesSubject = new BehaviorSubject(defaultPreferences);
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

	public updatePreferences(value: PrismPreferences) {
		this.preferencesSubject.next(value);
	}

	private updateActiveCategory() {
		let model = this.modelSubject.getValue();
		if (model) {
			let category = model.findCategory(this.activeCategoryName);
			this.activeCategorySubject.next(category);
		}
	}


}
