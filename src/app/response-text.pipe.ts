import {Pipe, PipeTransform} from '@angular/core';
import {Response} from "@angular/http";

@Pipe({
	name: 'responseText'
})
export class ResponseTextPipe implements PipeTransform {

	transform(value: Response, args?: any): string {
		if (value) {
			return value.text();
		}
		else {
			return '';
		}
	}

}
