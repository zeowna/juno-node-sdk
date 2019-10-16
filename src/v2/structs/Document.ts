import { Link } from './Link';

export interface Document {
  id?: string;
  type?: string;
  description?: string;
  approvalStatus?: string;
  _links?: {
    self?: Link;
    upload?: Link;
  };
}
