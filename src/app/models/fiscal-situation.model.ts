import { Base } from "./base.model";
import { Company } from "./company.model";
import { FiscalOperation } from "./fiscal-operation.model";
import { GeneralAbstract } from "./general-abstract.model";
import { State } from "./state.model";

export class FiscalSituation extends GeneralAbstract {
    fiscal_operation!: FiscalOperation;
    origin_states!: State[];
    destination_states!: State[];
    fiscal_groups?: FiscalGroup[];
    ncms?: Ncm[];
    fiscal_situation_groups!: FiscalSituationGroup[];
    score?: number;

    //ICMS
    icms_base?: number;
    icms_aliquota?: number;
    icms_tipo_tributacao?: number;
    icms_porcentagem_fcp?: number;
    icms_redutor_aliquota?: number;
    icms_diferido?: string;
    icms_diferencial_aliquota?: string;
    icms_saldo_reduz_icms?: string;
    icms_modality?: IcmsModality;
    icms_tax_situation?: IcmsTaxSituation;

    //ICMS ST
    icms_sub_base?: number;
    icms_sub_aliquota?: number;
    icms_sub_sit_trib?: string;
    icms_sub_reducao?: string;
    icms_sub_tipo_antecipacao?: number;
    icms_st_modality?: IcmsStModality;
    icms_sub_totaliza?: string;
    icms_sub_fcp?: number;

    //IPI
    ipi_aliquota?: number;
    ipi_tipo_tributacao?: number;
    ipi_base_icms?: string;
    ipi_base_pis_cofins?: string;
    ipi_frete_base_ipi?: string;
    ipi_enquadramento?: number;
    ipi_tax_situation?: IpiTaxSituation;

    //PIS
    pis_aliquota?: number;
    pis_tipo_trib?: string;
    pis_tax_situation?: PisCofinsTaxSituation;

    //COFINS
    cofins_aliquota?: number;
    cofins_tipo_trib?: string;
    cofins_tax_situation?: PisCofinsTaxSituation;

    //PIS/COFINS
    pc_rateio_credito?: number;
    pis_cofins_credit_calculation_base?: PisCofinsCreditCalculationBase;

    //ISS
    iss_base?: number;
    iss_aliquota?: number;
    iss_servico?: string;
    iss_exigencia?: number;

    //CFOP
    cfop_state?: Cfop;
    cfop_ext?: Cfop;
    cfop_interstate?: Cfop;

    //RETENCOES
    ret_irff?: number;
    ret_pis?: number;
    ret_cofins?: number;
    ret_csl?: number;
    ret_inss?: number;
    ret_iss?: number;

    //OUTROS DADOS
    aliquota_suframa?: number;
    pis_cofins_suframa?: number;
    variacao_preco?: number;
    base_presumido?: number;
    atv_pres?: number;

    //OBSERVACOES
    observations?: Observation[]

    //CBENEF
    cbenef?: string;
}

export class FiscalGroup extends GeneralAbstract {
    description!: string;
}

export class Ncm extends Base {
    code!: string;
    description!: string;
}

export class FiscalSituationGroup extends GeneralAbstract {
    description!: string;
    companies!: Company[];
}

export class IcmsModality extends Base {
    code!: string;
    description!: string;
}

export class IcmsTaxSituation extends Base {
    code!: string;
    description!: string;
}

export class IcmsStModality extends Base {
    code!: string;
    description!: string;
}

export class IpiTaxSituation extends Base {
    code!: string;
    description!: string;
}

export class PisCofinsTaxSituation extends Base {
    code!: string;
    description!: string;
}

export class PisCofinsCreditCalculationBase extends Base {
    code!: string;
    description!: string;
}

export class Cfop extends Base {
    code?: string;
    description?: string;
    application?: string;
    cat_code?: string;
    subcat_code?: string;
}

export class Observation extends GeneralAbstract {
    observation!: string
}