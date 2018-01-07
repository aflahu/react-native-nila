// import _ from 'lodash';
const _ = require('lodash');

const pBeda = a => {
  return a.sort().filter((item, pos, ary) => {
    return !pos || item !== ary[pos - 1];
  });
};

const pSama = a => {
  return a.sort().filter((item, pos, ary) => {
    return item === ary[pos - 1];
  });
};

const totalinSama = a => {
  return _(a)
    .groupBy('penyakit')
    .map((v, k) => ({
      penyakit: k.split(',').map(Number),
      belief: _.sumBy(v, 'belief')
    }))
    .value();
};

const palingTinggi = a => {
  return a.reduce((p, c) => {
    if (p.belief > c.belief) {
      return {
        penyakit: p.penyakit,
        belief: p.belief
      };
    }
    return {
      penyakit: c.penyakit,
      belief: c.belief
    };
  });
};

// console.log(Math.max(0.7, 0.045));

module.exports = { pSama, pBeda, totalinSama, palingTinggi };
