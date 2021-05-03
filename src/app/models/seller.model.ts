import { Customer } from "./customer.model";
import { GeneralAbstract } from "./general-abstract.model";
import { Person } from "./person.model";

export class Seller extends GeneralAbstract {
  person_id!: string
  person!: Person

  customers?: Customer[]
}
