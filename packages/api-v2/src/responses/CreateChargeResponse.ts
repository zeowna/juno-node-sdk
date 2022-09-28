import { GetListResponse } from './GetListResponse';
import { Charge } from '../entities';

export type CreateChargesResponse = GetListResponse<{ charges: Charge[] }>
