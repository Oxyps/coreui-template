import { Abstract } from "./abstract.model";
import { GeneralAbstract } from "./general-abstract.model";
import { Item } from "./item.model";
import { User } from "./user.model";

export class ItemOffer extends GeneralAbstract {
  description?: string;
  user?: User;
  name?: string;
  cost_insert?: string;
  status?: string;
  start_date?: Date;
  end_date?: Date;
}

export class ItemOfferDetail extends Abstract {
  item!: Item;
  item_offer!: ItemOffer;
  current_price!: number;
  offer_price!: number;
}
