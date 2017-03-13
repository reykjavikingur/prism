import {Example} from "./example";
import {Category} from "./category";

export class PrismModel {

	public static fromRecord(record): PrismModel {
		let model = new PrismModel();
		model._title = record.title;
		model._overview = record.overview;
		model._categories = [];
		if (record.categories) {
			for (let categoryRecord of record.categories) {
				if (categoryRecord) {
					let category = Category.fromRecord(categoryRecord);
					model._categories.push(category);
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

	private _categories: Array<Category>;
	public get categories(): Array<Category> {
		return this._categories;
	}

	constructor() {

	}

	public findCategory(name: String): Category {
		return this.categories.find(c => c.name == name);
	}

}
