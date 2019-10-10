import { DefaultResponseV1 } from './DefaultResponseV1';

export interface CreatePayeeResponseV1 extends DefaultResponseV1 {
  data: {
    id: number;
    token: string;
  };
}
