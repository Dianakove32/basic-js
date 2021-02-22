const CustomError = require("../extensions/custom-error");

module.exports = function countCats(  matrix  ) {
  //throw new CustomError('Not implemented');
  return matrix.reduce((res, a) => res.concat(a.filter(el => el === "^^")), [])
  .length;
};
