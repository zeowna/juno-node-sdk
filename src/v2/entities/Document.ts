import { Link } from './Link';
import { JunoEntity } from './JunoEntity';
import { DocumentApprovalStatus, DocumentsTypesLegalPerson, DocumentTypesPrivatePerson } from '../enums';

export interface Document extends JunoEntity {
  type: DocumentsTypesLegalPerson | DocumentTypesPrivatePerson;
  description: string;
  approvalStatus: DocumentApprovalStatus;
  _links: {
    self: Link;
    upload: Link;
  };
}
