const data = [
  { key: 1, value: 'data1' },
  { key: 2, value: 'data2' },
  { key: 3, value: 'data3' },
  { key: 4, value: 'data4' }
];

const id = [1, 2, 4];
const dataId = data.map(item => item.key);

const hasil = id.map((item, i) => {
  if (dataId.includes(item)) {
    return data[i];
  }
});

console.log(hasil);
