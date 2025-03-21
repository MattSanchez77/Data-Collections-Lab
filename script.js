let str = `[["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let commas = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    // if char is a comma, do this
    commas++;
  } else if (str[i] === '\n') {
    //If char is a "\n", do this\
    console.log(cell1, cell2, cell3, cell4);
    commas = 0;
    cell1 = ``;
    cell2 = ``;
    cell3 = ``;
    cell4 = ``;

  } else {
    // any other char
    if (commas == 0) {
      // if 0 commas
      cell1 += str[i];
    } else if (commas == 1) {
      // if 1 commas
      cell2 += str[i];
    } else if (commas == 2) {
      // if 2 commas
      cell3 += str[i];
    } else {
      // if 3 or more
      cell4 += str[i];
    }
  }

  if (i === str.length - 1) { // if index number is the same as length of string
    console.log(cell1, cell2, cell3, cell4);
  }
}