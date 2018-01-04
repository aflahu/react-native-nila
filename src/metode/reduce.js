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

const test = intiArray => {
  let m = 1;
  const kali = (curr, enem) => {
    return curr * enem.belief;
  };
  for (let i = 0; i < intiArray.length; i++) {
    console.log(`phase ${i}`);
    if (i === 0) {
      m = intiArray[0].belief;
    } else {
      m = kali(m, intiArray[i]);
      console.log(m);
    }
  }
};

test(gejala);
