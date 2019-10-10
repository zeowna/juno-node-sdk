import { LinkV2 } from './LinkV2';

export interface DocumentV2 {
  id?: string;
  type?: string;
  description?: string;
  approvalStatus?: string;
  _links?: {
    self?: LinkV2;
    upload?: LinkV2;
  };
}
