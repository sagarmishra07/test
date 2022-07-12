import { exportFile} from 'quasar'
import { errorNotify, successNotify } from 'src/utils/notify';



export function wrapCsvValue(val:any, formatFn:any, name='table') {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}
export function exportToCSV(data, column, fileName='table-export'){

try{
  const content = [column.map(col => wrapCsvValue(col.label , col.format))]
    .concat(
      data.map(row =>
        column
          .map(col =>
            wrapCsvValue(
              typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format
            )
          )
          .join(',')
      )
    )
    .join('\r\n');

  const status = exportFile(`${fileName}.csv`, content, 'text/csv');

  !status && errorNotify('Browser denied file download...' , '');
  status && successNotify('Success : Ledgent is Downloaded');
}catch (e) {
  errorNotify('Browser denied file download...' , e);
}

}
