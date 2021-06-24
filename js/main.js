'use strict';

function binarySearch () {
  let start = 0;
  let end = 100;
  let answer = -1;
  do {

    let middle = Math.ceil((start + end) / 2);

    if (window.confirm(`Is your number less or equal to ${middle}?`)) {
      end = middle -1;
      answer = middle;
    } else {
      start = middle + 1;
    }
  } while (start < end);
  alert(`This is your number: ${answer}`) ;
};

console.log(binarySearch());