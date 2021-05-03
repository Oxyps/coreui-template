import { Abstract } from "./abstract.model";
import { Base } from "./base.model";

// export interface State extends Base {
export interface State extends Abstract {
  ibge: number;
  country_bacen: string;
  initials: string;
  name: string;
}
