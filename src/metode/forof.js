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

for (const [i] of gejala.entries()) {
  console.log(i);
}
