import { Abstract } from './abstract.model';

export class Group extends Abstract {
	name: string;

	constructor(name: string) {
		super();

		this.name = name;
	}
}