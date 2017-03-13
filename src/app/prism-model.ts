import {Example} from "./example";

export class PrismModel {

	public static fromRecord(record): PrismModel {
		let model = new PrismModel();
		model._title = record.title;
		model._overview = record.overview;
		model._categories = [];
		model._examples = [];
		if (record.categories) {
			for (let categoryRecord of record.categories) {
				if (categoryRecord) {
					model._categories.push(categoryRecord.name);
					if (categoryRecord.examples) {
						for (let exampleRecord of categoryRecord.examples) {
							let example = new Example({
								name: exampleRecord.name,
								description: exampleRecord.description,
								source: exampleRecord.source,
								category: categoryRecord.name
							});
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

}
