import {Example} from "./example";

export class Category {

	public static fromRecord(record): Category {
		let model = new Category();
		model.name = record.name;
		model.examples = [];
		if (record.examples) {
			for (let exampleRecord of record.examples) {
				if (exampleRecord) {
					let example = Example.fromRecord(exampleRecord);
					model.examples.push(example);
				}
			}
		}
		return model;
	}

	name: String;

	examples: Array<Example>;

}
