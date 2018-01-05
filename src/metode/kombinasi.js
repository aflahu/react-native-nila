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

const kombinasi = async (ms, gk) => {
  let mHasil = ms;
  let mBaru = [];

  for (let m = 0; m < ms.length - 1; m++) {
    let bTotal = 0;
    for (let g = m; g < mHasil.length - 1; g++) {
      const data = await kali(mHasil[g], gk);
      await mBaru.push(...data);
      bTotal += mHasil[g].belief;
    }
    const data = await kali(
      {
        penyakit: 0,
        belief: 1 - bTotal
      },
      gk
    );
    await mBaru.push(...data);

    mHasil = await mBaru.filter(g => g.penyakit !== 0);
    mBaru = [];
  }

  return mHasil;
};

const kali = async (g1, g2) => {
  if (g1.penyakit !== 0) {
    const allG = await g1.penyakit.concat(g2.penyakit);
    const penyakit = await pSama(allG);
    const belief = g1.belief * g2.belief;
    await console.log(belief);
    return [
      {
        penyakit,
        belief
      },
      {
        penyakit: g1.penyakit,
        belief
      }
    ];
  }
  const penyakit = 0;
  const belief = g1.belief * g2.belief;
  await console.log(belief);
  return [
    {
      penyakit: g2.penyakit,
      belief
    },
    {
      penyakit,
      belief
    }
  ];
};
//
// console.log(kombinasi([gejala[0], gejala[1]]));
const mulai = async () => {
  const hasil = await kombinasi([gejala[0], gejala[1]], gejala[1]);
  console.log(hasil);
  const hasil2 = await kombinasi(hasil, gejala[2]);
  console.log(hasil2);
};
mulai().catch(e => console.log(e));
