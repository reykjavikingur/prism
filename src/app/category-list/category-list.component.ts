import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'prism-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	@Input() public categories: Array<String>;

	constructor() {
	}

	ngOnInit() {
	}

}
