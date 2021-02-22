const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members  ) {
  //throw new CustomError('Not implemented');
  let newArr = [];
  if (!Array.isArray(members)) {
      return false;
  }
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
          let firsLetUpper = members[i].trim()[0].toUpperCase();
          newArr.push(firsLetUpper);
      }
  }
  return newArr.sort().join('');
};

