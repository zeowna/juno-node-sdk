import { Link } from './Link';
import { JunoEntity } from './JunoEntity';
import { DocumentApprovalStatus, DocumentTypes } from '../enums';

export interface Document extends JunoEntity {
  type: DocumentTypes;
  description: string;
  approvalStatus: DocumentApprovalStatus;
  _links: {
    self: Link;
    upload: Link;
  };
}
