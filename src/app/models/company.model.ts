import { GeneralAbstract } from "./general-abstract.model";
import { Person } from "./person.model";

export class Company extends GeneralAbstract {
  person!: Person;
  simples_aliquota?: number;
  logo?: string;  
  usa_de?: string;
}