import { GeneralAbstract } from "./general-abstract.model";
import { Person } from "./person.model";

export class Transporter extends GeneralAbstract {
  person!: Person;
}