//written by johnny prencipe && zach harrison dec 2 2020

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true
    }
  }

  const returnArr = [];
  //pull data for rows and columns
  const columns = letters[0].length;
  const rows = letters.length;
  //double for loop to write an empty matrix of the correct length
  for (let i = 0; i < columns; i++) {
    returnArr[i] = [];
    for (let j = 0; j < rows; j++) {
      returnArr[i].push();
    }
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      //double for loop to invert the letters
      returnArr[j][i] = letters[i][j]
    }
  }

  verticalJoin = letters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true
    }
  }
  return false;
};

module.exports = wordSearch