/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {Examples} from './examples.service';

describe('Examples', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Examples]
		});
	});

	it('should ...', inject([Examples], (service: Examples) => {
		expect(service).toBeTruthy();
	}));
});
