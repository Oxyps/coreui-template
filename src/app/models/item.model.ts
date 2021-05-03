import { Abstract } from "./abstract.model"
import { FiscalGroup } from "./fiscal-situation.model"
import { GeneralAbstract } from "./general-abstract.model"
import { ItemOfferDetail } from "./item-offer"
import { Offer, OfferDetail } from "./offer.model"

export class Item extends GeneralAbstract {
  description!: string
  full_description?: string
  sku?: string
  gtin?: string
  price?: number
  cost?: number
  pauta?: number
  old_price?: number
  offer_name?: string
  price_table_name?: string

  photos?: ItemImage[]
  item_stocks?: ItemStock[]
  item_stock_locales?: ItemStockLocale[]
  item_offer_details?: ItemOfferDetail[]
  price_tables?: PriceTableItem[]
  fiscal_group?: FiscalGroup
  offers?: OfferDetail[];
}

export class ItemImage extends Abstract {
  main: boolean = false
  url!: string
  description?: string
}

export class PriceTable extends GeneralAbstract {
  description!: string
}

export class PriceTableItem extends Abstract {
  price!: number
  item!: Item
  price_table!: PriceTable
}

export class ItemStock extends Abstract {
  quantity!: number
  quantity_reserved?: number
  location?: string
}

export class ItemStockLocale extends Abstract {
  quantity?: number
  quantity_in?: number
  quantity_out?: number
  quantity_max?: number
  quantity_min?: number
}
