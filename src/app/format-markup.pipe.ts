import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'formatMarkup'
})
export class FormatMarkupPipe implements PipeTransform {

	transform(value: string, args?: any): string {
		if (value) {
			return value
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot')
				.replace(/\n/g, '<br/>')
				.replace(/\t/g, '&nbsp;&nbsp;')
				.replace(/  /g, '&nbsp;&nbsp;')
				;
		}
		else {
			return '';
		}
	}

}
