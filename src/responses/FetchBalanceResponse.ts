import { Balance } from "../structs/Balance";
import { DefaultResponse } from "./DefaultResponse";

export interface FetchBalanceResponse extends DefaultResponse {
  data: Balance;
}
