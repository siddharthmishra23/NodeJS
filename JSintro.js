// //Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
// //Math.round(.6)           // => 1.0: round to the nearest integer
// Math.ceil(.6)            // => 1.0: round up to an integer
// Math.floor(.6)           // => 0.0: round down to an integer
// Math.abs(-5)             // => 5: absolute value
// Math.max(x,y,z)          // Return the largest argument
// Math.min(x,y,z)          // Return the smallest argument
// Math.random()            // Pseudo-random number x where 0 <= x < 1.0
// Math.PI                  // π: circumference of a circle / diameter
// Math.E                   // e: The base of the natural logarithm
// Math.sqrt(3)             // => 3**0.5: the square root of 3
// Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
// Math.sin(0)              // Trigonometry: also Math.cos, 
// Math.atan, etc.Math.log(10)             // Natural logarithm of 10Math.log(100)/
// Math.LN10  // Base 10 logarithm of 100Math.log(512)/
// Math.LN2   // Base 2 logarithm of 512
// Math.exp(3)              // Math.E cubed


// // The following Number properties are defined in ES6
// Number.parseInt()       // Same as the global parseInt() function
// Number.parseFloat()     // Same as the global parseFloat() function
// Number.isNaN(x)         // Is x the NaN value?
// Number.isFinite(x)      // Is x a number and finite?
// Number.isInteger(x)     // Is x an integer?
// Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
// Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
// Number.MAX_SAFE_INTEGER // => 2**53 - 1
// Number.EPSILON          // => 2**-52: smallest difference between numbers



// let timestamp = Date.now();  // The current time as a timestamp (a number).
// let now = new Date();        // The current time as a Date object.
// let ms = now.getTime();      // Convert to a millisecond timestamp.
// let iso = now.toISOString(); // Convert to a string in standard format.



let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6


let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"
text.split(/\D+/)                // => ["","1","2","3"]: split on nondigits


// ES2020 finally defines globalThis as the standard way to refer to the global object in any context. As of early 2020, this feature has been implemented by all modern browsers and by Node.
let c = Array.from(b);              // In ES6, copy arrays with Array.from()

let [a, [b, c]] = [1, [2,2.5], 3]; //destructuring
let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]
let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent;  // r == 0.0; g == 0.0; b == 0.0

Conditional Property Access

expression ?. identifier
expression ?.[ expression ]


function square(x, log) { // The second argument is an optional function
    log?.(x);             // Call the function if there is one
    return x * x;         // Return the square of the argument
}


// Operator	Operation	A	N	Types
// ++	Pre- or post-increment	R	1	lval→num
// --	Pre- or post-decrement	R	1	lval→num
// -	Negate number	R	1	num→num
// +	Convert to number	R	1	any→num
// ~	Invert bits	R	1	int→int
// !	Invert boolean value	R	1	bool→bool
// delete	Remove a property	R	1	lval→bool
// typeof	Determine type of operand	R	1	any→str
// void	Return undefined value	R	1	any→undef
// **	Exponentiate	R	2	num,num→num
// *, /, %	Multiply, divide, remainder	L	2	num,num→num
// +, -	Add, subtract	L	2	num,num→num
// +	Concatenate strings	L	2	str,str→str
// <<	Shift left	L	2	int,int→int
// >>	Shift right with sign extension	L	2	int,int→int
// >>>	Shift right with zero extension	L	2	int,int→int
// <, <=,>, >=	Compare in numeric order	L	2	num,num→bool
// <, <=,>, >=	Compare in alphabetical order	L	2	str,str→bool
// instanceof	Test object class	L	2	obj,func→bool
// in	Test whether property exists	L	2	any,obj→bool
// ==	Test for non-strict equality	L	2	any,any→bool
// !=	Test for non-strict inequality	L	2	any,any→bool
// ===	Test for strict equality	L	2	any,any→bool
// !==	Test for strict inequality	L	2	any,any→bool
// &	Compute bitwise AND	L	2	int,int→int
// ^	Compute bitwise XOR	L	2	int,int→int
// |	Compute bitwise OR	L	2	int,int→int
// &&	Compute logical AND	L	2	any,any→any
// ||	Compute logical OR	L	2	any,any→any
// ??	Choose 1st defined operand	L	2	any,any→any
// ?:	Choose 2nd or 3rd operand	R	3	bool,any,any→any
// =	Assign to a variable or property	R	2	lval,any→any
// **=, *=, /=, %=,	Operate and assign	R	2	lval,any→any
// +=, -=, &=, ^=, |=,				
// <<=, >>=, >>>=				
// ,	Discard 1st operand, return 2nd	L	2	any,any→any



let point = {x: 1, y: 1};  // Define an object
"x" in point               // => true: object has property named "x"
"z" in point               // => false: object has no "z" property.
"toString" in point        // => true: object inherits toString method

let data = [7,8,9];        // An array with elements (indices) 0, 1, and 2
"0" in data                // => true: array has an element "0"
1 in data                  // => true: numbers are converted to strings
3 in data                  // => false: no element 3


let d = new Date();  // Create a new object with the Date() constructor
d instanceof Date    // => true: d was created with Date()
d instanceof Object  // => true: all objects are instances of Object
d instanceof Number  // => false: d is not a Number object
let a = [1, 2, 3];   // Create an array with array literal syntax
a instanceof Array   // => true: a is an array
a instanceof Object  // => true: all arrays are objects
a instanceof RegExp  // => false: arrays are not regular expressions



// The falsy values are false, null, undefined, 0, -0, NaN, and "".


let options = { timeout: 0, title: "", verbose: false, n: null };
options.timeout ?? 1000     // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the object
options.verbose ?? true     // => false: as defined in the object
options.quiet ?? false      // => false: property is not defined
options.n ?? 10             // => 10: property is null

// The first-defined operator ?? evaluates to its first defined operand: if its left operand is not null and not undefined, it returns that value. 
// Otherwise, it returns the value of the right operand.


let o = { x: 1, y: 2}; // Start with an object
delete o.x;            // Delete one of its properties
"x" in o               // => false: the property does not exist anymore

let a = [1,2,3];       // Start with an array
delete a[2];           // Delete the last element of the array
2 in a                 // => false: array element 2 doesn't exist anymore
a.length               // => 3: note that array length doesn't change, though


// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1. both changes its value
for(let i=0,j=10; i < j; i++,j--) {
    console.log(i+j);
}



for(let p in o) {      // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property
}


Labeled Statements

identifier: statement
mainloop: while(token !== null) {
    // Code omitted...
    continue mainloop;  // Jump to the next iteration of the named loop
    // More code omitted...
}



let o = { x: 1 };
o.hasOwnProperty("x")        // => true: o has an own property x
o.hasOwnProperty("y")        // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property


let o = { x: 1 };
"x" in o         // => true: o has an own property "x"
"y" in o         // => false: o doesn't have a property "y"
"toString" in o  // => true: o inherits a toString property


// There are several ways to create arrays. The subsections that follow explain how to create arrays with:

//     Array literals

//     The ... spread operator on an iterable object

//     The Array() constructor

//     The Array.of() and Array.from() factory methods

let a = new Array(10); //Note that no values are stored in the array, and the array index properties “0”, “1”, and so on are not even defined for the array.


Array.of()        // => []; returns empty array with no arguments
Array.of(10)      // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3)   // => [1, 2, 3]


let copy = Array.from(original); // creates an copy of array or iterable. takes another argument as function which goes to all the element of iterable


a = [1,2,3,4,5];     // Start with a 5-element array.
a.length = 3;        // a is now [1,2,3].
a.length = 0;        // Delete all elements.  a is [].
a.length = 5;        // Length is 5, but no elements, like new Array(5)


let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;  // letters at even indexes
}
everyother  // => "Hlowrd"



let data = [1,2,3,4,5], sum = 0;
// Compute the sum of the elements of the array
data.forEach(value => { sum += value; });          // sum == 15

// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]

let a = [1, 2, 3];
a.map(x => x*x)   // => [1, 4, 9]: the function takes input x and returns x*x

let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3)         // => [2, 1]; values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

let a = [1,2,3,4,5];
a.findIndex(x => x === 3)  // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0)    // => -1; no negative numbers in the array
a.find(x => x % 5 === 0)   // => 5: this is a multiple of 5
a.find(x => x % 7 === 0)   // => undefined: no multiples of 7 in the array

let a = [1,2,3,4,5];
a.every(x => x < 10)      // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.

let a = [1,2,3,4,5];
a.some(x => x%2===0)  // => true; a has some even numbers.
a.some(isNaN)         // => false; a has no non-numbers.


// every() returns true and some returns false when invoked on an empty array.

[1, [2, 3]].flat()    // => [1, 2, 3]
[1, [2, [3]]].flat()  // => [1, 2, [3]]
[1,2,3,[4,5,6],[90,67],{a:67,b:89}].flat() // [ 1, 2, 3, 4, 5, 6, 90, 67, { a: 67, b: 89 } ]


let a = [1, [2, [3, [4]]]];
a.flat(1)   // => [1, 2, [3, [4]]]
a.flat(2)   // => [1, 2, 3, [4]]
a.flat(3)   // => [1, 2, 3, 4]
a.flat(4)   // => [1, 2, 3, 4]


let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];

let a = [1,2,3];
a.concat(4, 5)          // => [1,2,3,4,5]
a.concat([4,5],[6,7])   // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]])  // => [1,2,3,4,5,[6,7]]; but not nested arrays
a                       // => [1,2,3]; the original array is unmodified

// Unlike concat(), push() does not flatten array arguments.

let stack = [];       // stack == []
stack.push(1,2);      // stack == [1,2];
stack.pop();          // stack == [1]; returns 2
stack.push(3);        // stack == [1,3]
stack.pop();          // stack == [1]; returns 3
stack.push([4,5]);    // stack == [1,[4,5]]
stack.pop()           // stack == [1]; returns [4,5]
stack.pop();          // stack == []; returns 1
let a = [];            // a == []
a.unshift(1)           // a == [1]
a.unshift(2)           // a == [2, 1]
a = [];                // a == []
a.unshift(1,2)         // a == [1, 2]
let q = [];            // q == []
q.push(1,2);           // q == [1,2]
q.shift();             // q == [2]; returns 1
q.push(3)              // q == [2, 3]
q.shift()              // q == [3]; returns 2
q.shift()              // q == []; returns 3

 // When passing multiple arguments to unshift(), they are inserted all at once, which means that they end up in the array in a different order than they would be 
 // if you inserted them one at a time:

 let a = [1,2,3,4,5];
a.slice(0,3);    // Returns [1,2,3]
a.slice(3);      // Returns [4,5]
a.slice(1,-1);   // Returns [2,3,4]
a.slice(-3,-2);  // Returns [3]
// slice() does not modify the array on which it is invoked.

// Unlike slice() and concat(), splice() modifies the array on which it is invoked.


let a = [1,2,3,4,5,6,7,8];
a.splice(4)    // => [5,6,7,8]; a is now [1,2,3,4]
a.splice(1,2)  // => [2,3]; a is now [1,4]
a.splice(1,1)  // => [4]; a is now [1]
let a = [1,2,3,4,5];
a.splice(2,0,"a","b")  // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2,2,[1,2],3)  // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]


let a = new Array(5);   // Start with no elements and length 5
a.fill(0)               // => [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1)            // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1)        // => [0,9,8,8,9]; fill with 8 at indexes 2, 3

let a = [1,2,3,4,5];
a.copyWithin(1)       // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2)   // => [4,4,3,4,4]: negative offsets work, too
> a = [1,2,3,4,5,6]
[ 1, 2, 3, 4, 5, 6 ]
> a.copyWithin(2,3,-1) // firstt destination for 1st ele, 2nd is for the element to be copied and 3rd will be the last but not included
[ 1, 2, 4, 5, 5, 6 ]


let a = [0,1,2,1,0];
a.indexOf(1)       // => 1: a[1] is 1
a.lastIndexOf(1)   // => 3: a[3] is 1
a.indexOf(3)       // => -1: no element has value 3
// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
    let results = [],            // The array of indexes we'll return
        len = a.length,          // The length of the array to be searched
        pos = 0;                 // The position to search from
    while(pos < len) {           // While more elements to search...
        pos = a.indexOf(x, pos); // Search
        if (pos === -1) break;   // If nothing found, we're done.
        results.push(pos);       // Otherwise, store index in array
        pos = pos + 1;           // And start next search at next element
    }
    return results;              // Return array of indexes
}


let a = [1,true,3,NaN];
a.includes(true)            // => true
a.includes(2)               // => false
a.includes(NaN)             // => true
a.indexOf(NaN)              // => -1; indexOf can't find NaN

let a = [33, 4, 1111, 222];
a.sort();               // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b) {  // Pass a comparator function
    return a-b;         // Returns < 0, 0, or > 0, depending on order
});                     // a == [4, 33, 222, 1111]; numerical order
a.sort((a,b) => b-a);   // a == [1111, 222, 33, 4]; reverse numerical order

let a = [1,2,3];
a.reverse();   // a == [3,2,1]

let a = [1, 2, 3];
a.join()               // => "1,2,3"
a.join(" ")            // => "1 2 3"
a.join("")             // => "123"
let b = new Array(10); // An array of length 10 with no elements
b.join("-")            // => "---------": a string of 9 hyphens

Array.isArray([])     // => true
Array.isArray({})     // => false

let a = {"0": "a", "1": "b", "2": "c", length: 3}; // An array-like object
Array.prototype.join.call(a, "+")                  // => "a+b+c"
Array.prototype.map.call(a, x => x.toUpperCase())  // => ["A","B","C"]
Array.prototype.slice.call(a, 0)   // => ["a","b","c"]: true array copy
Array.from(a)                      // => ["a","b","c"]: easier array copy


Array.prototype.join.call("JavaScript", " ")  // => "J a v a S c r i p t"

// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
    for(let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));

const f = x => { return { value: x }; };  // Good: f() returns an object
const g = x => ({ value: x });            // Good: g() returns an object
const h = x => { value: x };              // Bad: h() returns nothing
const i = x => { v: x, w: x };            // Bad: Syntax Error

// Arrow function does not have a prototype which means irt cannot be used as constructor


function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    // Return the biggest
    return maxValue;
}

max(1, 10, 100, 2, 3, 1000, 4, 5, 6)  // => 1000

// Multiply the vector {x,y} by a scalar value
function vectorMultiply({x, y}, scalar) {
    return { x: x*scalar, y: y*scalar };
}
vectorMultiply({x: 1, y: 2}, 2)  // => {x: 2, y: 4}

function vectorAdd(
    {x: x1, y: y1}, // Unpack 1st object into x1 and y1 params
    {x: x2, y: y2}  // Unpack 2nd object into x2 and y2 params
)
{
    return { x: x1 + x2, y: y1 + y2 };
}
vectorAdd({x: 1, y: 2}, {x: 3, y: 4})  // => {x: 4, y: 6}

// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({x, y, z=0}, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar };
}
vectorMultiply({x: 1, y: 2}, 2)  // => {x: 2, y: 4, z: 0}

// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({x, y, z=0, ...props}, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar, ...props };
}
vectorMultiply({x: 1, y: 2, w: -1}, 2)  // => {x: 2, y: 4, z: 0, w: -1}

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;

// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++;  // Return and increment counter property
}
uniqueInteger()  // => 0
uniqueInteger()  // => 1

// Remember the fundamental rule of lexical scoping: JavaScript functions are executed using the scope they were defined in.
// This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.
// in order to implement lexical scoping, the internal state of a JavaScript function object must 
// include not only the code of the function but also a reference to the scope in which the function definition appears. 
// This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure in the computer science literature.


function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();   // Create two counters
c.count()                           // => 0
d.count()                           // => 0: they count independently
c.reset();                          // reset() and count() methods share state
c.count()                           // => 0: because we reset c
d.count()                           // => 1: d was not reset


// call() and apply() allow you to indirectly invoke (§8.2.4) a function as if it were a method of some other object. 
// The first argument to both call() and apply() is the object on which the function is to be invoked; 

function f(y) { return this.x + y; } // This function needs to be bound
let o = { x: 1 };                    // An object we'll bind to
let g = f.bind(o);                   // Calling g(x) invokes f() on o
g(2)                                 // => 3
let p = { x: 10, g };                // Invoke g() as a method of this object
p.g(2)                               // => 3: g is still bound to o, not p.

let sum = (x,y) => x + y;      // Return the sum of 2 args
let succ = sum.bind(null, 1);  // Bind the first argument to 1
succ(2)  // => 3: x is bound to 1, and we pass 2 for the y argument

function f(y,z) { return this.x + y + z; }
let g = f.bind({x: 1}, 2);     // Bind this and y
g(3)     // => 6: this.x is bound to 1, y is bound to 2 and z is 3

// const f = new Function("x", "y", "return x*y;"); ======== const f = function(x, y) { return x*y; };
// The Function() constructor expects any number of string arguments. The last argument is the text of the function body;

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function(...args) {             // Return a new function
        let result = f.apply(this, args);  // that calls f
        return !result;                    // and negates its result.
    };
}

const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even);         // A new function that does the opposite
[1,1,3,5,5].every(odd)         // => true: every element of the array is odd

r instanceof Range   // => true: r inherits from Range.prototype

function Strange() {}
Strange.prototype = Range.prototype;
new Strange() instanceof Range   // => true

let F = function() {}; // This is a function object.
let p = F.prototype;   // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F                // => true: F.prototype.constructor === F for any F



class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }

    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
}

// Here are example uses of this new Range class
let r = new Range(1,3);   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator


let Square = class { constructor(x) { this.area = x * x; } };
new Square(3).area  // => 9



























