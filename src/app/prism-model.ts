import {Example} from "./example";

export class PrismModel {

	public static fromRecord(record): PrismModel {
		let model = new PrismModel();
		model._title = record.title;
		model._overview = record.overview;
		model._examples = record.examples.map((record) => new Example(record));
		model.initializeCategories();
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

	private _examples: Array<Example>;
	public get examples(): Array<Example> {
		return this._examples;
	}

	private _categories: Array<String>;
	public get categories(): Array<String> {
		return this._categories;
	}

	constructor() {

	}

	private initializeCategories() {
		let hash = {};
		for (let example of this.examples) {
			hash[example.category] = true;
		}
		this._categories = Object.keys(hash);
	}

}
