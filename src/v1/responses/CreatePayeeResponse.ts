import { DefaultResponse } from './DefaultResponse';

export interface CreatePayeeResponse extends DefaultResponse {
  data: {
    id: number;
    token: string;
  };
}
