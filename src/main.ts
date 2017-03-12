import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';
import {prismConfig} from "./app/prism-config";

window['prism'] = prism;

function prism(data) {

	prismConfig.data = data;

	if (environment.production) {
		enableProdMode();
	}

	platformBrowserDynamic().bootstrapModule(AppModule);

}
