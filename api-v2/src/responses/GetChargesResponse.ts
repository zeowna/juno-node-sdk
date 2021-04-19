import { GetListResponse } from './GetListResponse';
import { Charge } from '../entities';

export type GetChargesResponse = GetListResponse<{ charges: Charge[] }>
