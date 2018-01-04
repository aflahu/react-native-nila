// perlu list gejala yg didiag dan belief
// gejala n * n=1

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

function pBeda(a) {
  return a.sort().filter((item, pos, ary) => {
    return !pos || item !== ary[pos - 1];
  });
}

function pSama(a) {
  return a.sort().filter((item, pos, ary) => {
    return item === ary[pos - 1];
  });
}
// const pSama = (arr, values) => arr.filter(v => values.includes(v));

const kombinasi = ms => {
  for (let i = 0; i < ms.length - 1; i++) {
    const g1 = ms[i];
    const g2 = ms[i + 1];
    const mHasil = [];
    const densitas = g1.belief * g2.belief;
    //   console.log(uniq([...g1.penyakit, ...g2.penyakit]));
    console.log('belief');
    console.log(`=> ${pSama([...g1.penyakit, ...g2.penyakit])} : ${densitas}`);
    // if (ps sama) {

    // }
    mHasil.push({
      ps: pSama([...g1.penyakit, ...g2.penyakit]),
      densitas
    });
    console.log(`=> ${pBeda([...g1.penyakit, ...g2.penyakit])} : ${densitas}`);
    mHasil.push({
      ps: pBeda([...g1.penyakit, ...g2.penyakit]),
      densitas
    });

    const pDensitas = (1 - g1.belief) * g2.belief;
    console.log('plausibility');
    console.log(`=> ${g2.penyakit} : ${pDensitas}`);
    mHasil.push({
      ps: g2.penyakit,
      densitas
    });
    console.log(`=> oth : ${pDensitas}`);
    // return mHasil;
  }
  // console.log(`kombnasi antara G${g1.key} dan G${g2.key} =`);
  // console.log(`kombinasi ${g1.penyakit} x ${g2.penyakit} adalah`);
  //   const pSama = g1.penyakit.filter()

  //   return m;
};

kombinasi(gejala);
