import { Link } from './Link';
import { JunoEntity } from './JunoEntity';

export interface Document extends JunoEntity {
  type: string;
  description: string;
  approvalStatus: string;
  _links: {
    self: Link;
    upload: Link;
  };
}
