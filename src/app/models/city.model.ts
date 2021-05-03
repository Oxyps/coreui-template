import { Abstract } from "./abstract.model";
import { Base } from "./base.model";
import { State } from "./state.model";

// export interface City extends Base {
export interface City extends Abstract {
  ibge: string;
  country_bacen: string;
  initials: string;
  name: string;

  state?: State;
}
