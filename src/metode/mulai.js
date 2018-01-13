// const { pSama, totalinSama, palingTinggi } = require('./arrayUtil');
import { pSama, totalinSama, palingTinggi } from './arrayUtil';
// const  = arrayUtil;

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
    penyakit: [2, 11],
    belief: 0.7
  }
];

const kombinasi = async (ms, gk) => {
  let mHasil = [];
  if (Array.isArray(ms)) {
    mHasil = ms;
  } else {
    mHasil[0] = ms;
  }
  const mBaru = [];
  let bTotal = 0;

  for (const [gs] of Object.entries(mHasil)) {
    const g = Number(gs);
    if (g < mHasil.length) {
      const data1 = await kali(mHasil[g], gk);
      await mBaru.push(...data1);
      bTotal = await (bTotal + mHasil[g].belief);
    }
  }
  const data2 = await kali(
    {
      penyakit: 0,
      belief: 1 - bTotal
    },
    gk
  );
  await mBaru.push(...data2);

  mHasil = await mBaru.filter(g => g.penyakit !== 0);
  mBaru.length = 0;
  // debugger;
  return await mHasil;
};

const kali = async (g1, g2) => {
  if (g1.penyakit !== 0) {
    const allG = await g1.penyakit.concat(g2.penyakit);
    const penyakit = await pSama(allG);
    const belief = g1.belief * g2.belief;
    return await [
      {
        penyakit,
        belief
      },
      {
        penyakit: g1.penyakit,
        belief: g1.belief * (1 - g2.belief)
      }
    ];
  }
  const penyakit = 0;
  const belief = g1.belief * g2.belief;
  // debugger;
  return await [
    {
      penyakit: g2.penyakit,
      belief
    },
    {
      penyakit,
      belief: g1.belief * (1 - g2.belief)
    }
  ];
};

const mulai = async gej => {
  debugger;
  let temp;
  const geja = Object.entries(gej);
  console.log(gej[1]);
  for (const [is, v] of geja) {
    const i = Number(is);
    if (i < gej.length - 1) {
      if (!temp) {
        // console.log(gej[1 + i], i);
        const raw = await kombinasi(v, gej[i + 1]);
        temp = await totalinSama(raw);
        // console.log(temp);
      } else {
        const raw = await kombinasi(temp, gej[i + 1]);
        // console.log(raw);
        temp = await totalinSama(raw);
        // console.log(temp);
      }
    }
  }
  // console.log(palingTinggi(temp));
  const data = await palingTinggi(temp);
  // console.log(data);
  return { penyakit: data.penyakit, persen: data.belief };
};

// mulai(gejala).catch(e => console.log(e));
export default mulai;
