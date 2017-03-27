import {ExampleFilter} from "./example-filter";
import {Example} from "./example";
export class Search implements ExampleFilter {

	constructor(query: string) {
		this._query = query.toLowerCase().trim();
	}

	private _query: string;
	public get query(): string {
		return this._query;
	}

	public includes(example: Example): boolean {
		let substring = this.query.toLowerCase().trim();
		let string = example.name.toLowerCase();
		return (string.indexOf(substring) >= 0);
	}

}
