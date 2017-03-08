export class Example {

	public name: string;

	public category: string;

	public description: string;

	public source: string;

	constructor(example: any) {
		this.name = example.name;
		this.category = example.category;
		this.description = example.description;
		this.source = example.source;
	}

}
