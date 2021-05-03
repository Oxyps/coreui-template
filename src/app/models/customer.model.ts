import { Address } from './address.model';
import { ContactForm } from './contact-form.model';
import { FiscalOperation } from './fiscal-operation.model';
import { GeneralAbstract } from './general-abstract.model';
import { PriceTable } from './item.model';
import { Order } from './order.model';
import { PaymentCondition } from './payment-condition.model';
import { Person } from './person.model';
import { Route } from './route.model';
import { Transporter } from './transporter.model';

export class Customer extends GeneralAbstract {
  route_sequence?: number;
  route_cycle?: number;
  route_config?: string;

  person_id?: string;
  payment_condition_id?: string;
  fiscal_operation_id?: string;
  price_table_id?: string;
  transporter_id?: string;
  route_id?: string;

  payment_condition?: PaymentCondition;
  person?: Person;
  fiscal_operation?: FiscalOperation;
  price_table?: PriceTable;
  route?: Route;
  transporter?: Transporter;

  address?: Address;
  contacts?: ContactForm[];
  latest_created_order?: Order;
}
