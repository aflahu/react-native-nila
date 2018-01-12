const _ = require('lodash');
const data = require('../../konfig/rules');

const pilihan = [1, 10];

const cocokRule = async (plihan, rules) => {
  const hasil = [];
  for (const v of rules) {
    if (v[0] === pilihan[0]) {
      hasil.push({
        data: v,
        sama: v.length - _.difference(v, pilihan).length
      });
    }
  }
  const palingBesar = _.maxBy(hasil, 'sama');
  const selisih = palingBesar.sama - palingBesar.data.length;

  if (selisih < 0) {
    return palingBesar.data.slice(0, selisih);
  }
  return palingBesar.data;
};

// cocokRule(pilihan, data).then(h => console.log(h)).catch(e => console.log(e))
// console.log(data);

module.exports = cocokRule;
