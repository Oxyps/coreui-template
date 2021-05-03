import { Abstract } from './abstract.model';

export class PaymentCondition extends Abstract {
  name!: string;
  type!: string;
  entry_installment?: boolean;
  num_installments?: number;
  first_installment_due?: number;
  interval_installment_due?: number;  
  index_calculation?: number
}
