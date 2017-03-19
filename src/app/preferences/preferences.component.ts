import {Component, OnInit, OnDestroy} from '@angular/core';
import {PrismPreferences} from "../prism-preferences";
import {PrismStoreService} from "../prism-store.service";
import {Subscription} from "rxjs";

@Component({
	selector: 'prism-preferences',
	templateUrl: './preferences.component.html',
	styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit, OnDestroy {

	private preferences: PrismPreferences;

	private sub: Subscription;

	constructor(private prismStore: PrismStoreService) {
	}

	ngOnInit() {
		this.sub = this.prismStore.preferences.subscribe(value => {
			this.preferences = value;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	private update() {
		this.prismStore.updatePreferences(this.preferences);
	}

}
