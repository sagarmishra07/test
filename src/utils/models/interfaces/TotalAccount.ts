import { BaseEntity } from 'src/utils/models/base';

export interface ITotalAccount extends BaseEntity{
  id: number;
  customerId: string;
  fullName?: string;
  amount?: number;
  meterCategory?: string;
  status: string,
  readingDate?: Date,
}

export interface ITotalAccountDTO extends ITotalAccount{
  type?: string;
}
