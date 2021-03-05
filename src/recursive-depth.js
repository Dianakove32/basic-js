const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    let a = 1;
    if (arr.find(i =>Array.isArray(i)) === undefined ) {
      return a;
    } else {
      let depthArray = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          depthArray.push(arr[i][j])
        }
      }
      a += this.calculateDepth(depthArray);
      return a;
    }
  }
};