// const data = require('../konfig/belief');
const data = require('../konfig/beliefj');

const arr = [
  {
    de: 1
  },
  {
    de: 2
  },
  {
    de: 10
  }
];

const get = arr.map(item => item.de);

const hasil = data.data.filter((item, i) => item.key === get[i]);
console.log(hasil);
