import { ITotalAccount, ITotalAccountDTO } from '../interfaces/TotalAccount';

export const convertFromTotalAccountDTO = (dto: ITotalAccountDTO): ITotalAccount => ({
  id: dto.id,
  customerId: dto.customerId,
  fullName: dto.fullName ?? '',
  amount: dto.amount ?? 0,
  meterCategory: dto.meterCategory,
  readingDate: dto.readingDate,
  status: dto.status,
});
