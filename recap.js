// 1. variable 
var favoriteBook = '4 hour work week';

// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex)
bookList[1] = 'Story Brand';
console.log(bookList);

bookList.push('Small Giants');
// bookList.pop();
console.log(bookList);

// 3. conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

// 4. Loop
// while loop
var i = 0; // loop variable
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

// for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}
