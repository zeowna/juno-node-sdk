import { Charge } from "./Charge";
import { DefaultResponse } from "./DefaultResponse";

export interface IssueChangeResponse extends DefaultResponse {
  data: {
    charges: Charge[],
  };
}
