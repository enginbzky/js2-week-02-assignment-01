// let  = [3, 6, 7, 8, 4, 2];

const findTheNumberOfOddNumbers = (pArray) => {
  let counter = 0;
  for (let index = 0; index < pArray.length; index++) {
    if (pArray[index] % 2 === 1) {
      counter++;
    }
  }
  return counter;
};

const getIndexOfFalseItem = (pArray2) => {
  for (let index = 0; index < pArray2.length; index++) {
    if (pArray2[index] == false) {
      return index;
    }
  }
};

const filterNumbers = (pArray3) => {
  let newArray = [];
  for (let index = 0; index < pArray3.length; index++) {
    if (pArray3[index] === 23) {
      newArray.push(pArray3[index]);
    }
  }
  for (let index = 0; index < 4; index++) {
    newArray.push(pArray3[index]);
  }
  return newArray;
};

const generateEmailAddress = (pArray4) => {
  let newEmail = [];
  let temp = "";
  for (let index = 0; index < pArray4.length; index++) {
    temp += pArray4[index].toString().toLowerCase();
    newEmail.push(temp + "@gmail.com");
    temp = "";
  }
  return newEmail;
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};

// let engin = [33, "Hi", 44, true, 23, "false", 66, 99];

// // let enginn = [];
// for (let index = 0; index < engin.length; index++) {console.log(typeof engin[index]);}
