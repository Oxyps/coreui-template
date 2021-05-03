import { GeneralAbstract } from './general-abstract.model';
import { PriceTable } from './item.model';
import { Seller } from './seller.model';

export class User extends GeneralAbstract {
  confirmed?: boolean;
  name!: string;
  login!: string;
  email!: string;
  password?: string;
  token?: string;
  type?: string;
  config?: string;
  sellers?: Seller[]
  price_tables?: PriceTable[]
  price_table_default?: PriceTable[]

  constructor(name: string, login: string, email: string) {
    super();

    this.name = name;
    this.login = login;
    this.email = email;
  }
}
