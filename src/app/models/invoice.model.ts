import { Abstract } from "./abstract.model";
import { City } from "./city.model";
import { GeneralAbstract } from "./general-abstract.model";

export class Invoice extends GeneralAbstract {
  
}

export class InvoiceAddress extends Abstract {
  address!: string;
  number!: number;
  complement?: string;
  neighborhood!: string;
  zipCode!: number;
  type!: string;
  city!: City;
}
