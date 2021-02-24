
module.exports = function check(str, bracketsConfig) {
  // if (str.length % 2 !== 0){
  //   return false;
  // }
  // while (str !== ''){
  //   let found = false;
  //   for (brackets of bracketsConfig){
  //     if (str.includes(brackets[0] + brackets[1])){
  //       str.replace(brackets[0] + brackets[1], '');
  //       found = true;
  //     }
  //   }
  //   if (!found){
  //     break;
  //   }
  // }
  // if (str === ''){
  //   return true;
  // } else {
  //   return false;
  // }
  while(str !== ''){
    let found = false;
    for (i of bracketsConfig) {
        let brackets = i[0] + i[1];
        if (str.includes(brackets)){
            str = str.replace(brackets, '');
            found = true;
        }
    }
    if (!found) {
      break;
    };
  }
  if (str === '') {
    return true;
  } else {
    return false;
  }
} 
