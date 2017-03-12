import {Component, OnInit, Input} from '@angular/core';
import {Example} from "../example";

@Component({
	selector: 'prism-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

	@Input() public example: Example;

	constructor() {
	}

	ngOnInit() {

	}

}
