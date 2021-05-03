import { Abstract } from './abstract.model';
import { CompanyGroup } from './company-group.model';

export abstract class GeneralAbstract extends Abstract {
  companyGroup?: CompanyGroup;
}
