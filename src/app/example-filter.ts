import {Example} from "./example";

export interface ExampleFilter {

	includes(example: Example): boolean;

}
