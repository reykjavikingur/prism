import {Example} from "./example";

export class PrismModel {

	public static fromRecord(record): PrismModel {
		let model = new PrismModel();
		model._title = record.title;
		model._examples = record.examples.map((record) => new Example(record));
		return model;
	}

	private _examples: Array<Example>;
	public get examples(): Array<Example> {
		return this._examples;
	}

	private _title: String;
	public get title(): String {
		return this._title;
	}

	constructor() {

	}

}
