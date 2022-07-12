import { IChart, IChartDTO } from '../interfaces/Charts';
import moment from 'moment';

export const convertFromIChartDTO= (dto: IChartDTO[]): IChart => {
  return{
    labels: dto.map((v:IChartDTO)=>v.label),
    data:dto.map((v:IChartDTO)=>v.value),
  }
}
export const convertFromIChartWithDateDTO= (dto: IChartDTO[]): IChart => {
  return{
    labels: dto.map((v:IChartDTO)=>moment(v.label).format('MMM DD, YYYY')),
    data:dto.map((v:IChartDTO)=>v.value),
  }
};
