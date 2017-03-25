import {Category} from "./category";

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

	public category: Category;

	constructor() {

	}

	public matches(q: string): boolean {
		let substring = q.toLowerCase().trim();
		let string = this.name.toLowerCase();
		return (string.indexOf(substring) >= 0);
	}

}
