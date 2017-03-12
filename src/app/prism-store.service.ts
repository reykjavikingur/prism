import {Injectable, Inject} from '@angular/core';
import {prismConfig} from "./prism-config";
import {BehaviorSubject, Observable} from "rxjs";
import {Example} from "./example";

@Injectable()
export class PrismStoreService {

	private subject: BehaviorSubject<Array<Example>>;

	private _examples: Observable<Array<Example>>;

	public get examples(): Observable<Array<Example>> {
		return this._examples;
	}

	constructor() {
		this.subject = new BehaviorSubject([]);
		this._examples = this.subject.asObservable();
	}

	public initialize() {
		let examples = this.parseExamples(prismConfig.data);
		this.subject.next(examples);
	}

	private parseExamples(data): Array<Example> {
		let examples = [];
		for (let record of data) {
			let example = new Example(record);
			examples.push(example);
		}
		return examples;
	}

}
