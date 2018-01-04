const pBeda = a => {
  return a.sort().filter((item, pos, ary) => {
    return !pos || item !== ary[pos - 1];
  });
};

const pSama = a => {
  return a.sort().filter((item, pos, ary) => {
    return item === ary[pos - 1];
  });
};

module.exports = { pSama, pBeda };
