import { random } from 'src/utils/randomNumberGenerator';
import { IChartDTO } from 'src/utils/models/interfaces/Charts';
import moment from 'moment';
import { convertFromIChartDTO } from 'src/utils/models/formatters/ChartDTO';

export const mockChartDataDTO = (num: number) => {
  let i = 1;
  const data: IChartDTO[] = [];
  const date = new Date();
  while (i <= num) {
    data.push({
      label: moment(date).add((i * -1), 'days').format('MMM DD, YYYY'),
      value: random(10, 90).toString()
    });
    i++;
  }
  return data;
};

export const mockChartData = (num: number) => convertFromIChartDTO(mockChartDataDTO(num));

export const mockChartDataFromArray = (arr: string[]) => {
  return arr.map(v=>({
    label:v,
    value: random(10, 90, 1000)
  }))
};
