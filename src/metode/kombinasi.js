const { pSama, pBeda } = require('./arrayUtil');

const gejala = [
  {
    key: 4,
    penyakit: [2, 5, 6, 8, 9, 10, 11, 12],
    belief: 0.3
  },
  {
    key: 5,
    penyakit: [2, 3, 5, 6, 7, 11],
    belief: 0.5
  },
  {
    key: 32,
    penyakit: [11],
    belief: 0.7
  }
];
// alur :
// menerima array m
// - ulangi array m
// - m dikali m selanjutnya dan p nya
// - totalin mPenyakit sama
// - return mBaru

const kombinasi = (g1, g2) => {
  const mHasil = [];
  mHasil.push(...kali(g1, g2));
  mHasil.push(...kali({ penyakit: 0, belief: 1 - g1.belief }, g2));

  const mHasilClear = mHasil.filter(g => g.penyakit !== 0);
  return mHasilClear;
};

const kali = (g1, g2) => {
  if (g1.penyakit !== 0) {
    const allG = g1.penyakit.concat(g2.penyakit);
    const penyakit = pSama(allG);
    const densitas = g1.belief * g2.belief;
    return [{ penyakit, densitas }, { penyakit: g1.penyakit, densitas }];
  }
  const penyakit = 0;
  const densitas = g1.belief * g2.belief;
  return [{ penyakit: g2.penyakit, densitas }, { penyakit, densitas }];
};
//
console.log(kombinasi(gejala[0], gejala[1]));
