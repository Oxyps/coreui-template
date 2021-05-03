import { Abstract } from './abstract.model';
import { Customer } from './customer.model';

export class Route extends Abstract {
  name!: string;

  customers?: Customer[];
}
