export class Example {

	public static fromRecord(record): Example {
		let model = new Example();
		model.name = record.name;
		model.descriptionUrl = record.descriptionUrl;
		model.sourceUrl = record.sourceUrl;
		return model;
	}

	public name: string;

	public descriptionUrl: string;

	public sourceUrl: string;

	constructor() {

	}

}
