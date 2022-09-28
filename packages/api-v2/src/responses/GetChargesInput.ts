import { GetChargesInputOrderBy } from '../enums';

export interface GetChargesInput {
  createdOnStart?: string | Date;
  createdOnEnd?: string | Date;
  dueDateStart?: string | Date;
  dueDateEnd?: string | Date;
  paymentDateStart?: string | Date;
  paymentDateEnd?: string | Date;
  showUnarchived?: boolean;
  showArchived?: boolean;
  showDue?: boolean;
  showNotDue?: boolean;
  showPaid?: boolean;
  showNotPaid?: boolean;
  showCancelled?: boolean;
  showNotCancelled?: boolean;
  showManualReconciliation?: boolean;
  showNotManualReconciliation?: boolean;
  showNotFailed?: boolean;
  orderBy?: GetChargesInputOrderBy;
  orderAsc?: boolean;
  pageSize?: number;
  page?: number;
  firstObjectId?: string;
  firstValue?: string;
  lastObjectId?: string;
  lastValue?: string;
}
