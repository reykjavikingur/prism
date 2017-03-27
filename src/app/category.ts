import {Example} from "./example";
import {ExampleFilter} from "./example-filter";

export class Category implements ExampleFilter {

	public static fromRecord(record): Category {
		let model = new Category();
		model._name = record.name;
		return model;
	}

	private _name: String;
	public get name(): String {
		return this._name;
	}

	public includes(example: Example): boolean {
		return example.category.name === this.name;
	}

}
