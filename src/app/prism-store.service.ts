import {Injectable} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {PrismModel} from "./prism-model";
import {Category} from "./category";
import {PrismPreferences} from "./prism-preferences";
import {Example} from "./example";
import {Search} from "./search";
import {ExampleFilter} from "./example-filter";

@Injectable()
export class PrismStoreService {

	private _model: BehaviorSubject<PrismModel>;

	public get model(): Observable<PrismModel> {
		return this._model;
	}

	private _activeCategory: BehaviorSubject<Category>;
	public get activeCategory(): Observable<Category> {
		return this._activeCategory;
	}

	private _activeSearch: BehaviorSubject<Search>;
	public get activeSearch(): Observable<Search> {
		return this._activeSearch;
	}

	private _activeFilter: BehaviorSubject<ExampleFilter>;
	public get activeFilter(): Observable<ExampleFilter> {
		return this._activeFilter;
	}

	private _activeExamples: BehaviorSubject<Array<Example>>;
	public get activeExamples(): Observable<Array<Example>> {
		return this._activeExamples;
	}

	private _preferences: BehaviorSubject<PrismPreferences>;
	public get preferences(): Observable<PrismPreferences> {
		return this._preferences;
	}

	constructor() {
		this._model = new BehaviorSubject(null);
		this._activeCategory = new BehaviorSubject(null);
		this._activeSearch = new BehaviorSubject(null);
		this._activeFilter = new BehaviorSubject(null);
		this._activeExamples = new BehaviorSubject(null);
		let defaultPreferences = new PrismPreferences();
		this._preferences = new BehaviorSubject(defaultPreferences);
	}

	public initializeModel() {
		let model = PrismModel.fromRecord(prismConfig.data);
		this._model.next(model);
	}

	public reset() {
		this._activeCategory.next(null);
		this._activeSearch.next(null);
		this._activeFilter.next(null);
	}

	public selectCategory(name: string) {
		let category = this._model.getValue().findCategoryByName(name);
		this._activeCategory.next(category);
		this.updateActiveExamples(category);
		this._activeSearch.next(null);
	}

	public search(q: string) {
		let search = new Search(q);
		this._activeSearch.next(search);
		this.updateActiveExamples(search);
		this._activeCategory.next(null);
	}

	public updatePreferences(value: PrismPreferences) {
		this._preferences.next(value);
	}

	private updateActiveExamples(filter: ExampleFilter) {
		let examples = this._model.getValue().findExamples(filter);
		this._activeExamples.next(examples);
		this._activeFilter.next(filter);
	}

}
