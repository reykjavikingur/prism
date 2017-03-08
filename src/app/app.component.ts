import {Component, OnInit} from '@angular/core';
import {Examples} from "./examples.service";

@Component({
	selector: 'prism-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private list;

	constructor(private examples: Examples) {
	}

	public ngOnInit() {
		this.examples.list.subscribe((r) => {
			this.list = r;
		});
	}

}
