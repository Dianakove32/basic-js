const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(typeof sampleActivity !== "string") {
    return false;
}

let number = parseFloat(sampleActivity);
if(number < 1 || number > 8999 || number == 15.1) {
  return false;
}

let checkNaN = number === number;
if(checkNaN === false) {
   return false;
}

let dig = 0.693/HALF_LIFE_PERIOD;
let time1 = (Math.log(MODERN_ACTIVITY/number))/dig;
let res = Math.ceil(time1);
return res;
};
