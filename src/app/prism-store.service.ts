import {Injectable} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {PrismModel} from "./prism-model";
import {Category} from "./category";
import {PrismPreferences} from "./prism-preferences";
import {Example} from "./example";

@Injectable()
export class PrismStoreService {

	private modelSubject: BehaviorSubject<PrismModel>;

	public get model(): Observable<PrismModel> {
		return this.modelSubject.asObservable();
	}

	private activeCategoryName: string;
	private activeCategorySubject: BehaviorSubject<Category>;

	public get activeCategory(): Observable<Category> {
		return this.activeCategorySubject.asObservable();
	}

	private activeExamplesSubject: BehaviorSubject<Array<Example>>;

	public get activeExamples(): Observable<Array<Example>> {
		return this.activeExamplesSubject.asObservable();
	}

	private preferencesSubject: BehaviorSubject<PrismPreferences>;

	public get preferences(): Observable<PrismPreferences> {
		return this.preferencesSubject.asObservable();
	}

	constructor() {
		this.modelSubject = new BehaviorSubject(null);
		this.activeCategorySubject = new BehaviorSubject(null);
		this.activeExamplesSubject = new BehaviorSubject(null);
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

	// FIXME change search to use a filter-based approach like categories
	public search(q: string) {
		let results = null;
		if (q) {
			results = [];
			for (let category of this.modelSubject.getValue().categories) {
				for (let example of category.examples) {
					if (example.matches(q)) {
						results.push(example);
					}
				}
			}
		}
		let c = new Category();
		c.name = '"' + q + '"';
		c.examples = results;
		this.activeCategorySubject.next(c);
	}

	public updatePreferences(value: PrismPreferences) {
		this.preferencesSubject.next(value);
	}

	private updateActiveCategory() {
		let model = this.modelSubject.getValue();
		if (model) {
			let category = model.findCategoryByName(this.activeCategoryName);
			this.activeCategorySubject.next(category);
			if (category) {
				let examples = model.findExamplesByCategory(category);
				this.activeExamplesSubject.next(examples);
			}
		}
	}

}
