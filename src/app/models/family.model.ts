import { Abstract } from './abstract.model';

export class Family extends Abstract {
	name: string;

	constructor(name: string) {
		super();

		this.name = name;
	}
}