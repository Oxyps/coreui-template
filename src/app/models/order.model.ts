import { Abstract } from './abstract.model'
import { Company } from './company.model'
import { Customer } from './customer.model'
import { FiscalOperation } from './fiscal-operation.model'
import { Cfop, FiscalSituation, IcmsModality, IcmsStModality, IcmsTaxSituation, IpiTaxSituation, Ncm, PisCofinsTaxSituation } from './fiscal-situation.model'
import { InvoiceAddress } from './invoice.model'
import { Item, PriceTable } from './item.model'
import { PaymentCondition } from './payment-condition.model'
import { Route } from './route.model'
import { Seller } from './seller.model'
import { StockLocale } from './stock-locale.model'
import { TicketStatus } from './ticket-status.model'
import { Transporter } from './transporter.model'

export class Order extends Abstract {
  origin?: string;
  system?: string;
  type?: string

  company?: Company
  company_id!: string

  fiscal_operation?: FiscalOperation
  fiscal_operation_id!: string

  customer?: Customer
  customer_id!: string

  seller?: Seller
  seller_id!: string

  payment_condition?: PaymentCondition
  payment_condition_id!: string

  price_table?: PriceTable
  price_table_id?: string

  transporter?: Transporter
  transporter_id?: string

  ticket_status?: TicketStatus
  ticket_status_id?: string

  route?: Route
  route_id?: string

  stock_locale?: StockLocale
  stock_locale_id!: string

  delivery_date?: Date

  number!: number
  status!: string
  sync_date!: string
  observation?: string

  order_items: OrderItem[] = []

  subtotal: number = 0
  general_discount: number = 0
  freight_value: number = 0
  products_value: number = 0
  others_value: number = 0
  total_value: number = 0

  icms_value: number = 0
  icms_st_value: number = 0
  icms_st_base: number = 0
  icms_sub_fcp_value: number = 0
  icms_base: number = 0
  ipi_value: number = 0
  pis_value: number = 0
  cofins_value: number = 0
  suframa_value: number = 0
  suframa_pis_cofins_value: number = 0
  federal_ibpt: number = 0
  state_ibpt: number = 0
  municipal_ibpt: number = 0
  insurance_value: number = 0
  total_value_discount: number = 0

  issuer_address!: InvoiceAddress;
  receiver_address!: InvoiceAddress;
}

export class OrderItem {
  quantity: number = 1
  gross_value: number = 0
  final_value: number = 0
  net_value: number = 0
  subtotal: number = 0
  price_changed: boolean = false
  individual_discount: number = 0
  individual_perc_discount: number = 0
  apportionment_discount: number = 0
  apportionment_perc_discount: number = 0
  apportionment_freight_value: number = 0
  item!: Item
  item_id!: string
  ncm!: Ncm

  fiscal_situation?: FiscalSituation
  icms_tax_situation?: IcmsTaxSituation
  ipi_tax_situation?: IpiTaxSituation
  pis_tax_situation?: PisCofinsTaxSituation
  cofins_tax_situation?: PisCofinsTaxSituation
  icms_modality?: IcmsModality
  icms_st_modality?: IcmsStModality
  cfop?: Cfop

  unit_final_value?: number = 0
  icms_base_value?: number = 0
  icms_value?: number = 0
  icms_aliquot?: number = 0
  icms_perc_dif?: number = 0
  icms_base_dif?: number = 0
  icms_dif_value?: number = 0
  icms_base_percentage?: number = 0
  icms_national_simple_aliquot?: number = 0
  icms_national_simple_value?: number = 0
  icms_reduction_percentage?: number = 0
  icms_st_base_value?: number = 0
  icms_st_value?: number = 0
  icms_st_aliquot?: number = 0
  icms_st_base_percentage?: number = 0
  icms_st_mva_value?: number = 0
  icms_sub_fcp_value?: number = 0
  icms_ub_fcp_perc?: number = 0
  icms_sub_fcp_bc?: number = 0
  ipi_value?: number = 0
  ipi_aliquot?: number = 0
  pis_value?: number = 0
  pis_aliquot?: number = 0
  pis_base_value?: number = 0
  cofins_value?: number = 0
  cofins_aliquot?: number = 0
  cofins_base_value?: number = 0
  suframa_value?: number = 0
  suframa_aliquot?: number = 0
  suframa_pis_cofins_value?: number = 0
  suframa_pis_cofins_aliquot?: number = 0
  others_apportionment_value?: number = 0
  insurance_apportionment_value?: number = 0
  fcp_aliquot?: number = 0
  fcp_value?: number = 0

  delivery_date?: number
  ite_observations?: string
}
