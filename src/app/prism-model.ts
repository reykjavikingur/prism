import {Example} from "./example";
import {Category} from "./category";

export class PrismModel {

	public static fromRecord(record): PrismModel {
		let model = new PrismModel();
		model._title = record.title;
		model._overview = record.overview;
		model._categories = [];
		model._examples = [];
		model._breakpoints = record.breakpoints;
		if (record.categories) {
			for (let categoryRecord of record.categories) {
				if (categoryRecord) {
					let category = Category.fromRecord(categoryRecord);
					model._categories.push(category);
					if (categoryRecord.examples) {
						for (let exampleRecord of categoryRecord.examples) {
							let example = Example.fromRecord(exampleRecord);
							example.category = category;
							model._examples.push(example);
						}
					}
				}
			}
		}
		return model;
	}

	private _title: String;
	public get title(): String {
		return this._title;
	}

	private _overview: String;
	public get overview(): String {
		return this._overview;
	}

	private _breakpoints: Array<String>;
	public get breakpoints(): Array<String> {
		return this._breakpoints;
	}

	private _categories: Array<Category>;
	public get categories(): Array<Category> {
		return this._categories;
	}

	private _examples: Array<Example>;
	public get examples(): Array<Example> {
		return this._examples;
	}

	constructor() {

	}

	public findCategoryByName(name: String): Category {
		return this.categories.find(c => c.name == name);
	}

	public findExamplesByCategory(category: Category): Array<Example> {
		return this.examples.filter((example) => {
			return example.category.name === category.name;
		});
	}

}
