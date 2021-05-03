import { GeneralAbstract } from './general-abstract.model';

export class ContactForm extends GeneralAbstract {
  type!: string;
  value!: string;
  person_id?: string;
}
