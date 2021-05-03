import { Abstract } from './abstract.model';
import { Company } from './company.model';
import { FiscalOperation } from './fiscal-operation.model';
import { PaymentCondition } from './payment-condition.model';

export class Parameter extends Abstract {
  emit_nf?: boolean;
  register_client?: boolean;
  show_financial?: boolean;
  allow_operation_change?: boolean;
  manager_stock?: boolean;
  required_all_fields_customer?: boolean;
  offline_defaulting_check?: boolean;
  online_defaulting_check?: boolean;
  repeated_item_behavior?: boolean;
  orders_import_period?: number;
  shipping_type?: number;
  discount_percentage?: number;
  general_discount_percentage?: number;

  company?: Company
  company_id?: string
  payment_condition?: PaymentCondition
  payment_condition_id?: string
  fiscal_operation?: FiscalOperation
  fiscal_operation_id?: string

  constructor(
    emit_nf: boolean,
    register_client: boolean,
    show_financial: boolean,
    allow_operation_change: boolean,
    manager_stock: boolean,
    required_all_fields_customer: boolean,
    offline_defaulting_check: boolean,
    online_defaulting_check: boolean,
    repeated_item_behavior: boolean,
    orders_import_period: number,
    shipping_type: number,
    discount_percentage: number,
    general_discount_percentage: number,
  ) {
    super();

    this.emit_nf = emit_nf;
    this.register_client = register_client;
    this.show_financial = show_financial;
    this.allow_operation_change = allow_operation_change;
    this.manager_stock = manager_stock;
    this.required_all_fields_customer = required_all_fields_customer;
    this.offline_defaulting_check = offline_defaulting_check;
    this.online_defaulting_check = online_defaulting_check;
    this.repeated_item_behavior = repeated_item_behavior;
    this.orders_import_period = orders_import_period;
    this.shipping_type = shipping_type;
    this.discount_percentage = discount_percentage;
    this.general_discount_percentage = general_discount_percentage;
  }
}
