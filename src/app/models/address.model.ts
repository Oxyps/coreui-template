import { GeneralAbstract } from './general-abstract.model';
import { Person } from './person.model';
import { City } from './city.model';

export class Address extends GeneralAbstract {
  address!: string;
  number!: string;
  zip_code!: string;
  neighborhood!: string;
  complement!: string;
  
  city_ibge!: string;
  city?: City;
  country_bacen!: string;

  person_id?: string;
  person?: Person;
}
