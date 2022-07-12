import { log } from 'util';

export const filterTable = (params, array, keyword = '') =>
  array.filter(v =>
    params
      .map(
        param =>
          v[param] &&
          v[param]?.toString()?.toLowerCase()?.includes(keyword.toLowerCase())
      )
      ?.some(Boolean)
  );

export const filterIndividualTable = (params = [''], array = [{}], search = ['']) => {
  const s = search.map(sa => sa.toString().toLowerCase().trim());
  const send = array.filter(a => {
    const check = params.map((p, key) => {
      const words = s.map(sa => sa.split(' '))[key];
      console.log("words", a[p]?.toString().toLowerCase().trim());
        // return  words.includes(a[p]?.toString().toLowerCase().trim());
      }
    );
    console.log(">>>>>>>>>>>>>>>>>>>>>>>")

    // console.log('check', check);
  })?.some(Boolean);
  // console.log('adsf asdf asdf adsfasdf', send);
};
