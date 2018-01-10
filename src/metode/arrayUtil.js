import _ from 'lodash';
// const _ = require('lodash');

export const pBeda = a => {
  return a.sort().filter((item, pos, ary) => {
    return !pos || item !== ary[pos - 1];
  });
};

export const pSama = a => {
  return a.sort().filter((item, pos, ary) => {
    return item === ary[pos - 1];
  });
};

export const totalinSama = a => {
  return _(a)
    .groupBy('penyakit')
    .map((v, k) => ({
      penyakit: k.split(',').map(Number),
      belief: _.sumBy(v, 'belief')
    }))
    .value();
};

export const palingTinggi = a => {
  return a.reduce((p, c) => {
    if (p.belief / p.penyakit.length > c.belief / c.penyakit.length) {
      return p;
    }
    return c;
  });
};

// console.log(Math.max(0.7, 0.045));
// export default {}
// module.exports = { pSama, pBeda, totalinSama, palingTinggi };
