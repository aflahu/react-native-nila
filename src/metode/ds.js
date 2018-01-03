// perlu list gejala yg didiag dan belief
// gejala n * n=1

const gejala = [{
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

const kombinasi = (ms) => {
  const banyakM = ms.length();
  ms.reduce((g1, g2) => {
    const densitas = g1.belief * g2.belief;
    //   console.log(uniq([...g1.penyakit, ...g2.penyakit]));
    console.log('belief');
    console.log(`=> ${pSama([...g1.penyakit, ...g2.penyakit])} : ${densitas}`);
    console.log(`=> ${pBeda([...g1.penyakit, ...g2.penyakit])} : ${densitas}`);

    const pDensitas = (1 - g1.belief) * g2.belief;
    console.log('plausibility');
    console.log(`=> ${g2.penyakit} : ${pDensitas}`);
    console.log(`=> oth : ${pDensitas}`);
  })
  // console.log(`kombnasi antara G${g1.key} dan G${g2.key} =`);
  // console.log(`kombinasi ${g1.penyakit} x ${g2.penyakit} adalah`);
  //   const pSama = g1.penyakit.filter()

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



  //   return m;
};

kombinasi(gejala[0], gejala[1]);