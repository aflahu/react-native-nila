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

const totalinTidakSama = a => {
  const sort = _(a)
    .sortBy('penyakit')
    .value();
  const hasil = sort.reduce((p, c) => {
    if (c.penyakit[0] === 100 && p && p.penyakit[0]) {
      console.log(c);
      return { penyakit: [100], belief: c.belief + p.belief };
    }
    // console.log(c);
  });
  // console.log(hasil);
  // console.log(a.find(v => v.penyakit[0] === 100));
};

const totalinSama = (a, pembagi) => {
  return _(a)
    .groupBy('penyakit')
    .map((v, k) => ({
      penyakit: k.split(',').map(Number),
      belief: _.sumBy(v, 'belief') / (1 - (pembagi || 0))
    }))
    .value();
};

const palingTinggi = a => {
  return a.reduce((p, c) => {
    if (p.belief > c.belief) {
      return p;
    }
    return c;
  });
};

// console.log(Math.max(0.7, 0.045));
// export default {}
module.exports = { pSama, pBeda, totalinSama, totalinTidakSama, palingTinggi };
