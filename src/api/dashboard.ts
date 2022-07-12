import { GetRequest, PostRequest } from 'src/plugins/http';
import { mockChartDataDTO, mockChartDataFromArray } from 'src/utils/mock/Charts';
import { ACCOUNTSUMMARY, EXPENSECATEGORIES, PAYMENTBREAKDOWN } from 'src/utils/constants';

const charts = {
  lastMonth: mockChartDataDTO(7),
  collectionByCategories:  mockChartDataFromArray(EXPENSECATEGORIES),
  paymentBreakdown:  mockChartDataFromArray(PAYMENTBREAKDOWN),
  accountSummary:  mockChartDataFromArray(ACCOUNTSUMMARY)
}


export const APIGetChartData= async (url)=>{
  return {data: charts[url]};
    // return await GetRequest('/charts/'+url);
}
