let arr = [1, 2, 3, 4, 5, 6];

arr.map((num, index, array) => {
  console.log(num, index, array);
});


let squareArray = arr.map(num => num**2)
console.log(squareArray)
