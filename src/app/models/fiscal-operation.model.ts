import { Abstract } from "./abstract.model";
import { GeneralAbstract } from "./general-abstract.model";

export class FiscalOperation extends GeneralAbstract {
  taxesIncludedPrice: boolean = false;
  description!: string;
  type!: string;
  subtotalingInvoice?: string;
  movementType!: MovementType;
  presenceIndicator: string = "1";
  modFrete: string = "9";
  calculateSimpleIcms: string = "S";
  generateFinancial: string = "N";
}

export class MovementType extends Abstract {
  description!: string;
}
