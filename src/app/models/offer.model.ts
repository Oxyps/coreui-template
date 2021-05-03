import { Abstract } from './abstract.model';
import { Item } from './item.model';

export class Offer extends Abstract {
  name!: string;
  status!: string;
  start_date!: string;
  end_date!: string;
  cost_insert!: number;

  user_id!: string;
  comapany_id!: string;
  comapany_group_id!: string;

  details?: OfferDetail[];
}

export class OfferDetail extends Abstract {
  current_price!: string;
  offer_price!: string;

  item_id!: string;
  item_offer_id!: string;
  comapany_group_id!: string;

  item?: Item;

  name?: Offer['name'];
  start_date?: Offer['start_date'];
  end_date?: Offer['end_date'];
  status?: Offer['status'];
}
