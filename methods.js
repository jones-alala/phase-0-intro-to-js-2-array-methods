// Adding elements into the array
const superheroes = ['batman', 'superman', 'spiderman', 'ironman'];
superheroes.push('thor');
console.log(superheroes); // ['batman', 'superman', 'spiderman', 'ironman', 'thor']
const addSuperHeroes = superheroes.unshift('captain america');
console.log(superheroes); // ['captain america', 'batman', 'superman', 'spiderman', 'ironman', 'thor']

// you have realised that thet when you are usiing  the push method the element is added at the end of the array and when you are using the unshift method the element is added at the beginning of the array.
//when you are using unshift method it returns the length of the array after adding the element.

//lets talk about the spread operator
//example of this is 
const umbers = [1, 2, 3, 4, 5];
const copyNumbers = [...umbers];
console.log(copyNumbers); // [1, 2, 3, 4, 5]
// you ahem noticed that the copyNumbers array is the exact copy of the numbers array.

//another example is adding numbers to the array
const numbers = [1, 2, 3, 4, 5];
const addNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(addNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// you have noticed that the addNumbers array is the copy of the numbers array with the numbers 6, 7, 8, 9, 10 added at the end of the array.

//lets talk about removing elements from the array using pop and shift methods
const removeNumbers = [1, 2, 3, 4, 5];
removeNumbers.pop();
console.log(removeNumbers); // [1, 2, 3, 4]
removeNumbers.shift();
console.log(removeNumbers); // [2, 3, 4]
// you have noticed that the pop method removes the last element from the array and the shift method removes the first element from the array.

//lets talk about the slice method
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const copyPrimeNumbers = primeNumbers.slice();
console.log(copyPrimeNumbers); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
//well you have realized that the copyPrimeNumbers array is the exact copy of the primeNumbers array
// when you are using the slice method without any arguments it returns the exact copy of the array.

//using an argument in the slice method
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const copyEvenNumbers = evenNumbers.slice(2)    // [6, 8, 10, 12, 14, 16, 18, 20]
console.log(copyEvenNumbers);
// you have noticed that the copyEvenNumbers array is the copy of the evenNumbers array starting from the index 2.