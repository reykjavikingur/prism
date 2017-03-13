export class Example {

	public static fromRecord(record): Example {
		let model = new Example();
		model.name = record.name;
		model.description = record.description;
		model.source = record.source;
		return model;
	}

	public name: string;

	public category: string;

	public description: string;

	public source: string;

	constructor() {

	}

}
