import NepaliDate from 'nepali-date/cjs/NepaliDate';

const nepaliDate = new NepaliDate();
const nepaliDateMonth = new NepaliDate();
export const nepDate = `${nepaliDate.year}-${nepaliDate.month+1}-${nepaliDate.day}`
export const nepDateMonth = `${nepaliDateMonth.year}-${nepaliDateMonth.month+2}-${nepaliDateMonth.day}`

