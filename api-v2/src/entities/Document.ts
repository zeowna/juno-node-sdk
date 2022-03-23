import { JunoEntity } from './JunoEntity';
import { DocumentApprovalStatus, DocumentsTypesLegalPerson, DocumentTypesPrivatePerson } from '../enums';

export interface Document extends JunoEntity {
  type: DocumentsTypesLegalPerson | DocumentTypesPrivatePerson;
  description: string;
  approvalStatus: DocumentApprovalStatus;
  rejectionReason: string;
  details: string;
}
