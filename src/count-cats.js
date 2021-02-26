const CustomError = require("../extensions/custom-error");

module.exports = function countCats(  matrix  ) {
   
  return matrix.reduce((res, a) => res.concat(a.filter(el => el === "^^")), [])
  .length;
};
