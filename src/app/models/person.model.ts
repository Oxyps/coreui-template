import { GeneralAbstract } from './general-abstract.model';

export class Person extends GeneralAbstract {
  name!: string;
  fantasy_name!: string;
  type!: string;
  rg!: string;
  cpf!: string;
  ie!: string;
  cnpj!: string;
  observation?: string;
}
