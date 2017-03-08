import {Injectable} from '@angular/core';
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {Example} from "./example";
import {Http} from "@angular/http";

@Injectable()
export class Examples {

	private subject: BehaviorSubject<Array<Example>>;

	private _list: Observable<Array<Example>>;

	public get list(): Observable<Array<Example>> {
		return this._list;
	}

	constructor(private http: Http) {
		this.subject = new BehaviorSubject([]);
		this._list = this.subject.asObservable();
		this.requestData();
	}

	private requestData() {
		this.http.get('/assets/test/examples.json').toPromise()
			.then((r) => {
				let value = this.parse(r);
				this.subject.next(value);
			})
		;
	}

	private parse(r): Array<Example> {
		let examples = [];
		let records = r.json();
		for (let record of records) {
			examples.push(new Example(record));
		}
		return examples;
	}

}
