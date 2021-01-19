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

let a = { b: null };
a.b?.c.d   // => undefined

// This is because property access with ?. is “short-circuiting”: if the subexpression to the left of ?. evaluates to null or undefined, then the entire expression immediately evaluates to undefined without any further property access attempts.


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

// If the new String method startsWith() is not already defined...
if (!String.prototype.startsWith) {
    // ...then define it like this using the older indexOf() method.
    String.prototype.startsWith = function(s) {
        return this.indexOf(s) === 0;
    };
}

// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

let a = new EZArray();
a instanceof EZArray  // => true: a is subclass instance
a instanceof Array    // => true: a is also a superclass instance.
a.push(1,2,3,4);      // a.length == 4; we can use inherited methods
a.pop()               // => 4: another inherited method
a.first               // => 1: first getter defined by subclass
a.last                // => 3: last getter defined by subclass
a[1]                  // => 2: regular array access syntax still works.
Array.isArray(a)      // => true: subclass instance really is an array
EZArray.isArray(a)    // => true: subclass inherits static methods, too!



A set is a collection of values, like an array is. Unlike arrays, however, sets are not ordered or indexed, and they do not allow duplicates: a value is either a member of a set or it is not a member; it is not possible to ask how many times a value appears in a set.

let s = new Set();       // A new, empty set
let t = new Set([1, s]); // A new set with two members
// The argument to the Set() constructor need not be an array: any iterable object (including other Set objects) is allowed:

let s = new Set();  // Start empty
s.size              // => 0
s.add(1);           // Add a number
s.size              // => 1; now the set has one member
s.add(1);           // Add the same number again
s.size              // => 1; the size does not change
s.add(true);        // Add another value; note that it is fine to mix types
s.size              // => 2
s.add([1,2,3]);     // Add an array value
s.size              // => 3; the array was added, not its elements
s.delete(1)         // => true: successfully deleted element 1
s.size              // => 2: the size is back down to 2
s.delete("test")    // => false: "test" was not a member, deletion failed
s.delete(true)      // => true: delete succeeded
s.delete([1,2,3])   // => false: the array in the set is different
s.size              // => 1: there is still that one array in the set
s.clear();          // Remove everything from the set
s.size              // => 0

let oneDigitPrimes = new Set([2,3,5,7]);
oneDigitPrimes.has(2)    // => true: 2 is a one-digit prime number
oneDigitPrimes.has(3)    // => true: so is 3
oneDigitPrimes.has(4)    // => false: 4 is not a prime
oneDigitPrimes.has("5")  // => false: "5" is not even a number

// The Set class is iterable, which means that you can use a for/of loop to enumerate all of the elements of a set:
// Because Set objects are iterable, you can convert them to arrays and argument lists with the ... spread operator:
// JavaScript Set class always remembers the order that elements were inserted in,
// the Set class also implements a forEach() method


let m = new Map();  // Create a new, empty map
let n = new Map([   // A new map initialized with string keys mapped to numbers
    ["one", 1],
    ["two", 2]
]);
// The optional argument to the Map() constructor should be an iterable object that yields two element [key, value] arrays. 
// In practice, this means that if you want to initialize a map when you create it, 
// you’ll typically write out the desired keys and associated values as an array of arrays.

let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2}; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])

let m = new Map();   // Start with an empty map
m.size               // => 0: empty maps have no keys
m.set("one", 1);     // Map the key "one" to the value 1
m.set("two", 2);     // And the key "two" to the value 2.
m.size               // => 2: the map now has two keys
m.get("two")         // => 2: return the value associated with key "two"
m.get("three")       // => undefined: this key is not in the set
m.set("one", true);  // Change the value associated with an existing key
m.size               // => 2: the size doesn't change
m.has("one")         // => true: the map has a key "one"
m.has(true)          // => false: the map does not have a key true
m.delete("one")      // => true: the key existed and deletion succeeded
m.size               // => 1
m.delete("three")    // => false: failed to delete a nonexistent key
m.clear();           // Remove all keys and values from the map

let m = new Map([["x", 1], ["y", 2]]);
[...m]    // => [["x", 1], ["y", 2]]

for(let [key, value] of m) {
    // On the first iteration, key will be "x" and value will be 1
    // On the second iteration, key will be "y" and value will be 2
}

[...m.keys()]     // => ["x", "y"]: just the keys
[...m.values()]   // => [1, 2]: just the values
[...m.entries()]  // => [["x", 1], ["y", 2]]: same as [...m]

m.forEach((value, key) => {  // note value, key NOT key, value
    // On the first invocation, value will be 1 and key will be "x"
    // On the second invocation, value will be 2 and key will be "y"
});

let pattern = /s$/;  =======   let pattern = new RegExp("s$");
// The second, “$”, is a special meta-character that matches the end of a string.
// Flags are specified following the second slash character in RegExp literals, or as a second string argument to the RegExp() constructor. 
let pattern = /s$/i; //we want case-insensitive matching:

// All alphabetic characters and digits match themselves literally in regular expressions. JavaScript regular expression syntax also supports certain nonalphabetic characters through escape sequences that begin with a backslash (\).

// A character class matches any one character that is contained within it. Thus, the regular expression /[abc]/ matches any one of the letters a, b, or c. Negated character classes can also be defined; these match any character except those contained within the brackets. A negated character class is specified by placing a caret (^) as the first character inside the left bracket. The RegExp /[^abc]/ matches any one character other than a, b, or c. Character classes can use a hyphen to indicate a range of characters. To match any one lowercase character from the Latin alphabet, use /[a-z]/, and to match any letter or digit from the Latin alphabet, use /[a-zA-Z0-9]/. (And if you want to include an actual hyphen in your character class, simply make it the last character before the right bracket.)

[...]   Any one character between the brackets.

[^...]  Any one character not between the brackets.

.   Any character except newline or another Unicode line terminator. Or, if the RegExp uses the s flag, then a period matches any character, including line terminators.

\w  Any ASCII word character. Equivalent to [a-zA-Z0-9_].

\W  Any character that is not an ASCII word character. Equivalent to [^a-zA-Z0-9_].

\s  Any Unicode whitespace character.

\S  Any character that is not Unicode whitespace.

\d  Any ASCII digit. Equivalent to [0-9].

\D  Any character other than an ASCII digit. Equivalent to [^0-9].

[\b] A literal backspace (special case).


// The characters that specify repetition always follow the pattern to which they are being applied.


{n,m}   Match the previous item at least n times but no more than m times.

{n,}    Match the previous item n or more times.

{n} Match exactly n occurrences of the previous item.

?   Match zero or one occurrences of the previous item. That is, the previous item is optional. Equivalent to {0,1}.

+   Match one or more occurrences of the previous item. Equivalent to {1,}.

*   Match zero or more occurrences of the previous item. Equivalent to {0,}.

let r = /\d{2,4}/; // Match between two and four digits
r = /\w{3}\d?/;    // Match exactly three word characters and an optional digit
r = /\s+java\s+/;  // Match "java" with one or more spaces before and after
r = /[^(]*/;       // Match zero or more characters that are not open parens

// The | character separates alternatives. For example, /ab|cd|ef/ matches the string “ab” or the string “cd” or the string “ef”. And /\d{3}|[a-z]{4}/ matches either three digits or four lowercase letters.

// If you want to specify a date and time in UTC (Universal Coordinated Time, aka GMT), then you can use the Date.UTC().
let century = new Date(Date.UTC(2100, 0, 1));
let century = new Date(2100,         // Year 2100
    0,            // January
    1,            // 1st
    2, 3, 4, 5);  // 02:03:04.005, local time
    let now = new Date();     // The current time


    let epoch = new Date(0);  // Midnight, January 1st, 1970, GMT

    d.setTime(d.getTime() + 30000);


    let startTime = Date.now();
reticulateSplines(); // Do some time-consuming operation
let endTime = Date.now();
console.log(`Spline reticulation took ${endTime - startTime}ms.`);

The static Date.now() method returns the current time as a timestamp and is helpful when you want to measure how long your code takes to run:

Finally, if you pass a string to the Date() constructor, it will attempt to parse that string as a date and time specification. The constructor can parse dates specified in the formats produced by the toString(), toUTCString(), and toISOString() methods:


let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020
d.toString()  // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
d.toUTCString()         // => "Thu, 02 Jan 2020 01:10:30 GMT"
d.toLocaleDateString()  // => "1/1/2020": 'en-US' locale
d.toLocaleTimeString()  // => "5:10:30 PM": 'en-US' locale
d.toISOString()         // => "2020-01-02T01:10:30.000Z"

This is a full list of the string formatting methods of the Date class:

toString()

    This method uses the local time zone but does not format the date and time in a locale-aware way.
toUTCString()

    This method uses the UTC time zone but does not format the date in a locale-aware way.
toISOString()

    This method prints the date and time in the standard year-month-day hours:minutes:seconds.ms format of the ISO-8601 standard. The letter “T” separates the date portion of the output from the time portion of the output. The time is expressed in UTC, and this is indicated with the letter “Z” as the last letter of the output.
toLocaleString()

    This method uses the local time zone and a format that is appropriate for the user’s locale.
toDateString()

    This method formats only the date portion of the Date and omits the time. It uses the local time zone and does not do locale-appropriate formatting.
toLocaleDateString()

    This method formats only the date. It uses the local time zone and a locale-appropriate date format.
toTimeString()

    This method formats only the time and omits the date. It uses the local time zone but does not format the time in a locale-aware way.
toLocaleTimeString()

    This method formats the time in a locale-aware way and uses the local time zone.



    let o = {s: "", n: 0, a: [true, false, null]};
    let s = JSON.stringify(o);  // s == '{"s":"","n":0,"a":[true,false,null]}'
    let copy = JSON.parse(s);   // copy == {s: "", n: 0, a: [true, false, null]}


    // Typically, you pass only a single argument to JSON.stringify() and JSON.parse(). Both functions accept an optional second argument that allows us to extend the JSON format, and these are described next. JSON.stringify() also takes an optional third argument that we’ll discuss first. If you would like your JSON-formatted string to be human-readable (if it is being used as a configuration file, for example), then you should pass null as the second argument and pass a number or string as the third argument. This third argument tells JSON.stringify() that it should format the data on multiple indented lines. If the third argument is a number, then it will use that number of spaces for each indentation level. If the third argument is a string of whitespace (such as '\t'), it will use that string for each level of indent.



    let o = {s: "test", n: 0};
JSON.stringify(o, null, 2)  // => '{\n  "s": "test",\n  "n": 0\n}'



// If you need to re-create Date objects (or modify the parsed object in any other way), you can pass a “reviver” function as the second argument to JSON.parse(). If specified, this “reviver” function is invoked once for each primitive value (but not the objects or arrays that contain those primitive values) parsed from the input string. The function is invoked with two arguments. The first is a property name—either an object property name or an array index converted to a string. The second argument is the primitive value of that object property or array element. Furthermore, the function is invoked as a method of the object or array that contains the primitive value, so you can refer to that containing object with the this keyword.

// The return value of the reviver function becomes the new value of the named property. If it returns its second argument, the property will remain unchanged. If it returns undefined, then the named property will be deleted from the object or array before JSON.parse() returns to the user.

// As an example, here is a call to JSON.parse() that uses a reviver function to filter some properties and to re-create Date objects:


let data = JSON.parse(text, function(key, value) {
    // Remove any values whose property name begins with an underscore
    if (key[0] === "_") return undefined;

    // If the value is a string in ISO 8601 date format convert it to a Date.
    if (typeof value === "string" &&
        /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);
    }

    // Otherwise, return the value unchanged
    return value;
});


//  Arrays (including TypedArrays) are iterable, as are strings and Set and Map objects. This means that the contents of these data structures can be iterated—looped over—with the for/of loop

//  Iterators can be used with destructuring assignment:

let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze; // a == 128

let m = new Map([["one", 1], ["two", 2]]);
for(let [k,v] of m) console.log(k, v); // Logs 'one 1' and 'two 2'
[...m]            // => [["one", 1], ["two", 2]]: default iteration
[...m.entries()]  // => [["one", 1], ["two", 2]]: entries() method is the same
[...m.keys()]     // => ["one", "two"]: keys() method iterates just map keys
[...m.values()]   // => [1, 2]: values() method iterates just map values

// First, there are the iterable objects: these are types like Array, Set, and Map that can be iterated. Second, there is the iterator object itself, which performs the iteration. And third, there is the iteration result object that holds the result of each step of the iteration.

// An iterable object is any object with a special iterator method that returns an iterator object. An iterator is any object with a next() method that returns an iteration result object. And an iteration result object is an object with properties named value and done. To iterate an iterable object, you first call its iterator method to get an iterator object. Then, you call the next() method of the iterator object repeatedly until the returned value has its done property set to true. The tricky thing about this is that the iterator method of an iterable object does not have a conventional name but uses the Symbol Symbol.iterator as its name. So a simple for/of loop over an iterable object iterable could also be written the hard way, like this:


let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value)  // result.value == 99
}


// A generator is a kind of iterator defined with powerful new ES6 syntax; it’s particularly useful when the values to be iterated are not the elements of a data structure, but the result of a computation.

// When you invoke a generator function, it does not actually execute the function body, but instead returns a generator object. This generator object is an iterator. Calling its next() method causes the body of the generator function to run from the start (or whatever its current position is) until it reaches a yield statement. yield is new in ES6 and is something like a return statement. The value of the yield statement becomes the value returned by the next() call on the iterator. An example makes this clearer:

// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() { // Invoking this function does not run the code
    yield 2;                 // but just returns a generator object. Calling
    yield 3;                 // the next() method of that generator runs
    yield 5;                 // the code until a yield statement provides
    yield 7;                 // the return value for the next() method.
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value          // => 2
primes.next().value          // => 3
primes.next().value          // => 5
primes.next().value          // => 7
primes.next().done           // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]()    // => primes

// We can use generators like other iterable types
[...oneDigitPrimes()]        // => [2,3,5,7]
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
sum                          // => 17


function* add(){
    yield 1
    yield 2
}
let k = add()
k.next().value      //1
k.next().value     // 2

const seq = function*(from,to) {
    for(let i = from; i <= to; i++) yield i;
};
[...seq(3,5)]  // => [3, 4, 5]

let o = {
    x: 1, y: 2, z: 3,
    // A generator that yields each of the keys of this object
    *g() {
        for(let key of Object.keys(this)) {
            yield key;
        }
    }
};
[...o.g()] // => ["x", "y", "z", "g"]

// Note that there is no way to write a generator function using arrow function syntax.

function *oneAndDone() {
    yield 1;
    return "done";
}

// The return value does not appear in normal iteration.
[...oneAndDone()]   // => [1]

// But it is available if you explicitly call next()
let generator = oneAndDone();
generator.next()           // => { value: 1, done: false}
generator.next()           // => { value: "done", done: true }
// If the generator is already done, the return value is not returned again
generator.next()           // => { value: undefined, done: true }






function* smallNumbers() {
    console.log("next() invoked the first time; argument discarded");
    let y1 = yield 1;    // y1 == "b"
    console.log("next() invoked a second time with argument", y1);
    let y2 = yield y1;    // y2 == "c"
    console.log("next() invoked a third time with argument", y2);
    let y3 = yield 3;    // y3 == "d"
    console.log("next() invoked a fourth time with argument", y3);
    return 4;
}
// When the next() method of a generator is invoked, the generator function runs until it reaches a yield expression. The expression that follows the yield keyword is evaluated, and that value becomes the return value of the next() invocation. At this point, the generator function stops executing right in the middle of evaluating the yield expression. The next time the next() method of the generator is called, the argument passed to next() becomes the value of the yield expression that was paused. So the generator returns values to its caller with yield, and the caller passes values in to the generator with next(). The generator and caller are two separate streams of execution passing values (and control) back and forth. The following code illustrates:

let g = smallNumbers();
console.log("generator created; no code runs yet");
let n1 = g.next("a");   // n1.value == 1
console.log("generator yielded", n1.value);
let n2 = g.next("sid");   // n2.value == 2
console.log("generator yielded", n2.value);
let n3 = g.next("c");   // n3.value == 3
console.log("generator yielded", n3.value);
let n4 = g.next("d");   // n4 == { value: 4, done: true }
console.log("generator returned", n4.value);
generator created; no code runs yet
Script snippet %236:2 next() invoked the first time; argument discarded
Script snippet %236:15 generator yielded 1
Script snippet %236:4 next() invoked a second time with argument sid
Script snippet %236:17 generator yielded sid
Script snippet %236:6 next() invoked a third time with argument c
Script snippet %236:19 generator yielded 3
Script snippet %236:8 next() invoked a fourth time with argument d
Script snippet %236:21 generator returned 4
    

// Note the asymmetry in this code. The first invocation of next() starts the generator, but the value passed to that invocation is not accessible to the generator.

Asynchronous

// Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(checkForUpdates, 60000);

// setInterval() returns a value that we can use to stop the repeated
// invocations by calling clearInterval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}

// Ask the web browser to return an object representing the HTML
// <button> element that matches this CSS selector
let okay = document.querySelector('#confirmUpdateDialog button.okay');

// Now register a callback function to be invoked when the user
// clicks on that button.
okay.addEventListener('click', applyUpdate);


function getCurrentVersionNumber(versionCallback) { // Note callback argument
    // Make a scripted HTTP request to a backend version API
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    // Register a callback that will be invoked when the response arrives
    request.onload = function() {
        if (request.status === 200) {
            // If HTTP status is good, get version number and call callback.
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            // Otherwise report an error to the callback
            versionCallback(response.statusText, null);
        }
    };
    // Register another callback that will be invoked for network errors
    request.onerror = request.ontimeout = function(e) {
        versionCallback(e.type, null);
    };
}

// Promise-based asynchronous computations pass the exception (typically as an Error object of some kind, though this is not required) to the second function passed to then().

getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);

getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);


fetch("/api/user/profile")
    .then(response => {
        return response.json();
    })
    .then(profile => {
        displayUserProfile(profile);
    });

    fetch("/api/user/profile")    // Start the HTTP request
    .then(response => {       // Call this when status and headers are ready
        if (!response.ok) {   // If we got a 404 Not Found or similar error
            return null;      // Maybe user is logged out; return null profile
        }

        // Now check the headers to ensure that the server sent us JSON.
        // If not, our server is broken, and this is a serious error!
        let type = response.headers.get("content-type");
        if (type !== "application/json") {
            throw new TypeError(`Expected JSON, got ${type}`);
        }

        // If we get here, then we got a 2xx status and a JSON content-type
        // so we can confidently return a Promise for the response
        // body as a JSON object.
        return response.json();
    })
    .then(profile => {        // Called with the parsed response body or null
        if (profile) {
            displayUserProfile(profile);
        }
        else { // If we got a 404 error above and returned null we end up here
            displayLoggedOutProfilePage();
        }
    })
    .catch(e => {
        if (e instanceof NetworkError) {
            // fetch() can fail this way if the internet connection is down
            displayErrorMessage("Check your internet connection.");
        }
        else if (e instanceof TypeError) {
            // This happens if we throw TypeError above
            displayErrorMessage("Something is wrong with our server!");
        }
        else {
            // This must be some kind of unanticipated error
            console.error(e);
        }
    });

   // Now suppose that transient network load issues are causing this to fail about 1% of the time. A simple solution might be to retry the query with a .catch() call:

    queryDatabase()
    .catch(e => wait(500).then(queryDatabase))  // On failure, wait and retry
    .then(displayTable)
    .catch(displayDatabaseError);


    // Sometimes, though, we want to execute a number of asynchronous operations in parallel. The function Promise.all() can do this. Promise.all() takes an array of Promise objects as its input and returns a Promise. The returned Promise will be rejected if any of the input Promises are rejected. Otherwise, it will be fulfilled with an array of the fulfillment values of each of the input Promises.
    p = Promise.all([Promise.resolve(undefined),Promise.resolve("sid")])
    console.log(p)


                        //     Promise {<pending>}
                        // __proto__: Promise
                        // [[PromiseStatus]]: "fulfilled"
                        // [[PromiseValue]]: Array(2)
                        // 0: undefined
                        // 1: "sid"
                        // length: 2
                        // __proto__: Array(0)



    // We start with an array of URLs
const urls = [ /* zero or more URLs here */ ];
// And convert it to an array of Promise objects
promises = urls.map(url => fetch(url).then(r => r.text()));
// Now get a Promise to run all those Promises in parallel
Promise.all(promises)
    .then(bodies => { /* do something with the array of strings */ })
    .catch(e => console.error(e));

//     Promise.all() is slightly more flexible than described before. The input array can contain both Promise objects and non-Promise values. If an element of the array is not a Promise, it is treated as if it is the value of an already fulfilled Promise and is simply copied unchanged into the output array.

// The Promise returned by Promise.all() rejects when any of the input Promises is rejected. This happens immediately upon the first rejection and can happen while other input Promises are still pending. In ES2020, Promise.allSettled() takes an array of input Promises and returns a Promise, just like Promise.all() does. But Promise.allSettled() never rejects the returned Promise, and it does not fulfill that Promise until all of the input Promises have settled. The Promise resolves to an array of objects, with one object for each input Promise. Each of these returned objects has a status property set to “fulfilled” or “rejected.” If the status is “fulfilled”, then the object will also have a value property that gives the fulfillment value. And if the status is “rejected”, then the object will also have a reason property that gives the error or rejection value of the corresponding Promise:

// Occasionally, you may want to run a number of Promises at once but may only care about the value of the first one to fulfill. In that case, you can use Promise.race() instead of Promise.all(). It returns a Promise that is fulfilled or rejected when the first of the Promises in the input array is fulfilled or rejected. (Or, if there are any non-Promise values in the input array, it simply returns the first of those.)

// In that case, you use the Promise() constructor to create a new Promise object that you have complete control over. Here’s how it works: you invoke the Promise() constructor and pass a function as its only argument. The function you pass should be written to expect two parameters, which, by convention, should be named resolve and reject. The constructor synchronously calls your function with function arguments for the resolve and reject parameters. After calling your function, the Promise() constructor returns the newly created Promise. That returned Promise is under the control of the function you passed to the constructor. That function should perform some asynchronous operation and then call the resolve function to resolve or fulfill the returned Promise or call the reject function to reject the returned Promise. Your function does not have to be asynchronous: it can call resolve or reject synchronously, but the Promise will still be resolved, fulfilled, or rejected asynchronously if you do this.


function wait(duration) {
    // Create and return a new Promise
    return new Promise((resolve, reject) => { // These control the Promise
        // If the argument is invalid, reject the Promise
        if (duration < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        // Otherwise, wait asynchronously and then resolve the Promise.
        // setTimeout will invoke resolve() with no arguments, which means
        // that the Promise will fulfill with the undefined value.
        setTimeout(resolve, duration);
    });
}


const http = require("http");

function getJSON(url) {
    // Create and return a new Promise
    return new Promise((resolve, reject) => {
        // Start an HTTP GET request for the specified URL
        request = http.get(url, response => { // called when response starts
            // Reject the Promise if the HTTP status is wrong
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP status ${response.statusCode}`));
                response.resume();  // so we don't leak memory
            }
            // And reject if the response headers are wrong
            else if (response.headers["content-type"] !== "application/json") {
                reject(new Error("Invalid content-type"));
                response.resume();  // don't leak memory
            }
            else {
                // Otherwise, register events to read the body of the response
                let body = "";
                response.setEncoding("utf-8");
                response.on("data", chunk => { body += chunk; });
                response.on("end", () => {
                    // When the response body is complete, try to parse it
                    try {
                        let parsed = JSON.parse(body);
                        // If it parsed successfully, fulfill the Promise
                        resolve(parsed);
                    } catch(e) {
                        // If parsing failed, reject the Promise
                        reject(e);
                    }
                });
            }
        });
        // We also reject the Promise if the request fails before we
        // even get a response (such as when the network is down)
        request.on("error", error => {
            reject(error);
        });
    });
}

// Promise.all() makes it easy to run an arbitrary number of Promises in parallel. And Promise chains make it easy to express a sequence of a fixed number of Promises. Running an arbitrary number of Promises in sequence is trickier, however. Suppose, for example, that you have an array of URLs to fetch, but that to avoid overloading your network, you want to fetch them one at a time. If the array is of arbitrary length and unknown content, you can’t write out a Promise chain in advance, so you need to build one dynamically, with code like this:



function fetchSequentially(urls) {
    // We'll store the URL bodies here as we fetch them
    const bodies = [];

    // Here's a Promise-returning function that fetches one body
    function fetchOne(url) {
        return fetch(url)
            .then(response => response.text())
            .then(body => {
                // We save the body to the array, and we're purposely
                // omitting a return value here (returning undefined)
                bodies.push(body);
            });
    }

    // Start with a Promise that will fulfill right away (with value undefined)
    let p = Promise.resolve(undefined);

    // Now loop through the desired URLs, building a Promise chain
    // of arbitrary length, fetching one URL at each stage of the chain
    for(url of urls) {
        p = p.then(() => fetchOne(url));
    }

    // When the last Promise in that chain is fulfilled, then the
    // bodies array is ready. So let's return a Promise for that
    // bodies array. Note that we don't include any error handlers:
    // we want to allow errors to propagate to the caller.
    return p.then(() => bodies);
}
fetchSequentially(urls)
    .then(bodies => { /* do something with the array of strings */ })
    .catch(e => console.error(e));


// The value of a fulfilled Promise is like the return value of a synchronous function. And the value of a rejected Promise is like a value thrown by a synchronous function.

// We don’t usually use await with a variable that holds a Promise; instead, we use it before the invocation of a function that returns a Promise:It is critical to understand right away that the await keyword does not cause your program to block and literally do nothing until the specified Promise settles. The code remains asynchronous, and the await simply disguises this fact. This means that any code that uses await is itself asynchronous.
let response = await fetch("/api/user/profile");
let profile = await response.json();
// you can only use the await keyword within functions that have been declared with the async keyword.
async function getHighScore() {
    let response = await fetch("/api/user/profile");
    let profile = await response.json();
    return profile.highScore;
}

// The getHighScore() function is declared async, so it returns a Promise. And because it returns a Promise, we can use the await keyword with it:
displayHighScore(await getHighScore());

// But remember, that line of code will only work if it is inside another async function! You can nest await expressions within async functions as deeply as you want. But if you’re at the top level2 or are inside a function that is not async for some reason, then you can’t use await and have to deal with a returned Promise in the regular way:


getHighScore().then(displayHighScore).catch(console.error);

let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);


// The for/await Loop

const fs = require("fs");

async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding: "utf-8"});
    for await (let chunk of stream) {
        parseChunk(chunk); // Assume parseChunk() is defined elsewhere
    }
}

========================================================META=PROGRAMMING=====================================================

// The properties of a JavaScript object have names and values, of course, but each property also has three associated attributes that specify how that property behaves and what you can do with it:

//     The writable attribute specifies whether or not the value of a property can change.

//     The enumerable attribute specifies whether the property is enumerated by the for/in loop and the Object.keys() method.

//     The configurable attribute specifies whether a property can be deleted and also whether the property’s attributes can be changed.
let o = {
    // An ordinary data property
    dataProp: value,

    // An accessor property defined as a pair of functions.
    get accessorProp() { return this.dataProp; },
    set accessorProp(value) { this.dataProp = value; }
};



-----------------------------------------------------WEB DEVELOPMENT--------------------------------------------------------------
<script defer src="deferred.js"></script>
<script async src="async.js"></script>

// The <script> tag can have defer and async attributes, which cause scripts to be executed differently. These are boolean attributes—they don’t have a value; 

// Asynchronously load and execute a script from a specified URL
// Returns a Promise that resolves when the script has loaded.
function importScript(url) {
    return new Promise((resolve, reject) => {
        let s = document.createElement("script"); // Create a <script> element
        s.onload = () => { resolve(); };          // Resolve promise when loaded
        s.onerror = (e) => { reject(e); };        // Reject on failure
        s.src = url;                              // Set the script URL
        document.head.append(s);                  // Add <script> to document
    });
}

// The global navigator property provides access to information about the web browser, the OS it’s running on top of, and the capabilities of each. 
// Similarly, the global screen property provides access to the user’s display size via the screen.width and screen.height properties.
// There are two basic ways to register event handlers. The first, from the early days of the web, is to set a property on the object or document element that is the event target. The second (newer and more general) technique is to pass the handler to the addEventListener() method of the object or element.

// Set the onload property of the Window object to a function.
// The function is the event handler: it is invoked when the document loads.
window.onload = function() {
    // Look up a <form> element
    let form = document.querySelector("form#shipping");
    // Register an event handler function on the form that will be invoked
    // before the form is submitted. Assume isFormValid() is defined elsewhere.
    form.onsubmit = function(event) { // When the user submits the form
        if (!isFormValid(this)) {     // check whether form inputs are valid
            event.preventDefault();   // and if not, prevent form submission.
        }
    };
};


// When defining an event handler as an HTML attribute, the attribute value should be a string of JavaScript code. That code should be the body of the event handler function, not a complete function declaration. That is, your HTML event handler code should not be surrounded by curly braces and prefixed with the function keyword. For example:


<button onclick="console.log('Thank you');">Please Click</button>

// addEventListener() takes three arguments. The first is the event type for which the handler is being registered. The event type (or name) is a string that does not include the “on” prefix used when setting event handler properties. The second argument to addEventListener() is the function that should be invoked when the specified type of event occurs. 


// addEventListener() is paired with a removeEventListener() method that expects the same two arguments (plus an optional third) but removes an event handler function from an object rather than adding it.

document.removeEventListener("mousemove", handleMouseMove);
document.removeEventListener("mouseup", handleMouseUp);

// The optional third argument to addEventListener() is a boolean value or object. If you pass true, then your handler function is registered as a capturing event handler and is invoked at a different phase of event dispatch. We’ll cover event capturing in §15.2.4. If you pass a third argument of true when you register an event listener, then you must also pass true as the third argument to removeEventListener() if you want to remove the handler.

// Registering a capturing event handler is only one of the three options that addEventListener() supports, and instead of passing a single boolean value, you can also pass an object that explicitly specifies the options you want:

document.addEventListener("click", handleClick, {
    capture: true,
    once: true,
    passive: true
});
// If the Options object has a capture property set to true, then the event handler will be registered as a capturing handler. If that property is false or is omitted, then the handler will be non-capturing.

// If the Options object has a once property set to true, then the event listener will be automatically removed after it is triggered once. If this property is false or is omitted, then the handler is never automatically removed.

// If the Options object has a passive property set to true, it indicates that the event handler will never call preventDefault() to cancel the default action (see §15.2.5).
// if a JavaScript object has an addEventListener() method, then it is an “event target,” and this means it also has a dispatchEvent() method. You can create your own event object with the CustomEvent() constructor and pass it to dispatchEvent(). The first argument to CustomEvent() is a string that specifies the type of your event, and the second argument is an object that specifies the properties of the event object.

// Dispatch a custom event so the UI knows we are busy
document.dispatchEvent(new CustomEvent("busy", { detail: true }));

// Perform a network operation
fetch(url)
  .then(handleNetworkResponse)
  .catch(handleNetworkError)
  .finally(() => {
      // After the network request has succeeded or failed, dispatch
      // another event to let the UI know that we are no longer busy.
      document.dispatchEvent(new CustomEvent("busy", { detail: false }));
  });

// Elsewhere, in your program you can register a handler for "busy" events
// and use it to show or hide the spinner to let the user know.
document.addEventListener("busy", (e) => {
    if (e.detail) {
        showSpinner();
    } else {
        hideSpinner();
    }
});

// The DOM methods querySelector() and querySelectorAll() allow us to find the element or elements within a document that match a specified CSS selector.

// The querySelector() method takes a CSS selector string as its argument and returns the first matching element in the document that it finds, or returns null if none match:
// Find the document element for the HTML tag with attribute id="spinner"
let spinner = document.querySelector("#spinner");

// querySelectorAll() is similar, but it returns all matching elements in the document rather than just returning the first:
// Find all Element objects for <h1>, <h2>, and <h3> tags
let titles = document.querySelectorAll("h1, h2, h3");

// The return value of querySelectorAll() is not an array of Element objects. Instead, it is an array-like object known as a NodeList. NodeList objects have a length property and can be indexed like arrays, so you can loop over them with a traditional for loop. NodeLists are also iterable, so you can use them with for/of loops as well. If you want to convert a NodeList into a true array, simply pass it to Array.from().


// Look up an element by id. The argument is just the id, without
// the CSS selector prefix #. Similar to document.querySelector("#sect1")
let sect1 = document.getElementById("sect1");

// Look up all elements (such as form checkboxes) that have a name="color"
// attribute. Similar to document.querySelectorAll('*[name="color"]');
let colors = document.getElementsByName("color");

// Look up all <h1> elements in the document.
// Similar to document.querySelectorAll("h1")
let headings = document.getElementsByTagName("h1");

// getElementsByTagName() is also defined on elements.
// Get all <h2> elements within the sect1 element.
let subheads = sect1.getElementsByTagName("h2");

// Look up all elements that have class "tooltip."
// Similar to document.querySelectorAll(".tooltip")
let tooltips = document.getElementsByClassName("tooltip");

// Look up all descendants of sect1 that have class "sidebar"
// Similar to sect1.querySelectorAll(".sidebar")
let sidebars = sect1.getElementsByClassName("sidebar");


// there is a traversal API that allows us to treat a document as a tree of Element objects, ignoring Text nodes that are also part of the document.

// parentNode
// This property of an element refers to the parent of the element, which will be another Element or a Document object.

// children
// This NodeList contains the Element children of an element, but excludes non-Element children like Text nodes (and Comment nodes).

// childElementCount
// The number of Element children. Returns the same value as children.length.

// firstElementChild, lastElementChild
// These properties refer to the first and last Element children of an Element. They are null if the Element has no Element children.

// nextElementSibling, previousElementSibling
// These properties refer to the sibling Elements immediately before or immediately after an Element, or null if there is no such sibling.

// Using these Element properties, the second child Element of the first child Element of the Document can be referred to with either of these expressions:

document.children[0].children[1]
document.firstElementChild.firstElementChild.nextElementSibling

// demonstrate how you can use these properties to recursively do a depth-first traversal of a document invoking a specified function for every element in the document:
// Recursively traverse the Document or Element e, invoking the function
// f on e and on each of its descendants
function traverse(e, f) {
    f(e);                             // Invoke f() on e
    for(let child of e.children) {    // Iterate over the children
        traverse(child, f);           // And recurse on each one
    }
}

function traverse2(e, f) {
    f(e);                             // Invoke f() on e
    let child = e.firstElementChild;  // Iterate the children linked-list style
    while(child !== null) {
        traverse2(child, f);          // And recurse
        child = child.nextElementSibling;
    }
}

// If you want to traverse a document or some portion of a document and do not want to ignore the Text nodes, you can use a different set of properties defined on all Node objects. This will allow you to see Elements, Text nodes, and even Comment nodes (which represent HTML comments in the document).

// All Node objects define the following properties:

// parentNode
// The node that is the parent of this one, or null for nodes like the Document object that have no parent.

// childNodes
// A read-only NodeList that that contains all children (not just Element children) of the node.

// firstChild, lastChild
// The first and last child nodes of a node, or null if the node has no children.

// nextSibling, previousSibling
// The next and previous sibling nodes of a node. These properties connect nodes in a doubly linked list.

// nodeType
// A number that specifies what kind of node this is. Document nodes have value 9. Element nodes have value 1. Text nodes have value 3. Comment nodes have value 8.

// nodeValue
// The textual content of a Text or Comment node.

// nodeName
// The HTML tag name of an Element, converted to uppercase.


HTML ATTRIBUTES AS ELEMENT PROPERTIES
let image = document.querySelector("#main_image");
let url = image.src;       // The src attribute is the URL of the image
image.id === "main_image"  // => true; we looked up the image by id
let f = document.querySelector("form");      // First <form> in the document
f.action = "https://www.example.com/submit"; // Set the URL to submit it to.
f.method = "POST";                           // Set the HTTP request type.
// Note that this property-based API for getting and setting attribute values does not define any way to remove an attribute from an element. In particular, the delete operator cannot be used for this purpose. If you need to delete an attribute, use the removeAttribute() method.

// Element objects define a classList property that allows you to treat the class attribute as a list. The value of the classList property is an iterable Array-like object. Although the name of the property is classList, it behaves more like a set of classes, and defines add(), remove(), contains(), and toggle() methods:

// When we want to let the user know that we are busy, we display
// a spinner. To do this we have to remove the "hidden" class and add the
// "animated" class (assuming the stylesheets are configured correctly).
let spinner = document.querySelector("#spinner");
spinner.classList.remove("hidden");
spinner.classList.add("animated");

// In HTML, any attribute whose name is lowercase and begins with the prefix “data-” is considered valid, and you can use them for any purpose. These “dataset attributes” will not affect the presentation of the elements on which they appear, and they define a standard way to attach additional data without compromising document validity.

// In HTML, any attribute whose name is lowercase and begins with the prefix “data-” is considered valid, and you can use them for any purpose. These “dataset attributes” will not affect the presentation of the elements on which they appear, and they define a standard way to attach additional data without compromising document validity.

// In the DOM, Element objects have a dataset property that refers to an object that has properties that correspond to the data- attributes with their prefix removed. Thus, dataset.x would hold the value of the data-x attribute. Hyphenated attributes map to camelCase property names: the attribute data-section-number becomes the property dataset.sectionNumber.

<h2 id="title" data-section-number="16.1">Attributes</h2>
let number = document.querySelector("#title").dataset.sectionNumber;

document.body.innerHTML = "<h1>Oops</h1>";
let para = document.querySelector("p"); // First <p> in the document
let text = para.textContent;            // Get the text of the paragraph
para.textContent = "Hello World!";      // Alter the text of the paragraph

let paragraph = document.createElement("p"); // Create an empty <p> element
let emphasis = document.createElement("em"); // Create an empty <em> element
emphasis.append("World");                    // Add text to the <em> element
paragraph.append("Hello ", emphasis, "!");   // Add text and <em> to <p>
paragraph.prepend("¡");                      // Add more text at start of <p>
paragraph.innerHTML                          // => "¡Hello <em>World</em>!"

// append() and prepend() take any number of arguments, which can be Node objects or strings.

// call before() to insert the new content before that sibling or after() to insert it after that sibling. 

// You can remove an Element or Text node from the document by calling its remove() method, or you can replace it by calling replaceWith() instead. remove() takes no arguments, and replaceWith() takes any number of strings and elements just like before() and after() do:

// Remove the greetings element from the document and replace it with
// the paragraph element (moving the paragraph from its current location
// if it is already inserted into the document).
greetings.replaceWith(paragraph);

// And now remove the paragraph.
paragraph.remove();

/**
 * TOC.js: create a table of contents for a document.
 *
 * This script runs when the DOMContentLoaded event is fired and
 * automatically generates a table of contents for the document.
 * It does not define any global symbols so it should not conflict
 * with other scripts.
 *
 * When this script runs, it first looks for a document element with
 * an id of "TOC". If there is no such element it creates one at the
 * start of the document. Next, the function finds all <h2> through
 * <h6> tags, treats them as section titles, and creates a table of
 * contents within the TOC element. The function adds section numbers
 * to each section heading and wraps the headings in named anchors so
 * that the TOC can link to them. The generated anchors have names
 * that begin with "TOC", so you should avoid this prefix in your own
 * HTML.
 *
 * The entries in the generated TOC can be styled with CSS. All
 * entries have a class "TOCEntry". Entries also have a class that
 * corresponds to the level of the section heading. <h1> tags generate
 * entries of class "TOCLevel1", <h2> tags generate entries of class
 * "TOCLevel2", and so on. Section numbers inserted into headings have
 * class "TOCSectNum".
 *
 * You might use this script with a stylesheet like this:
 *
 *   #TOC { border: solid black 1px; margin: 10px; padding: 10px; }
 *   .TOCEntry { margin: 5px 0px; }
 *   .TOCEntry a { text-decoration: none; }
 *   .TOCLevel1 { font-size: 16pt; font-weight: bold; }
 *   .TOCLevel2 { font-size: 14pt; margin-left: .25in; }
 *   .TOCLevel3 { font-size: 12pt; margin-left: .5in; }
 *   .TOCSectNum:after { content: ": "; }
 *
 * To hide the section numbers, use this:
 *
 *   .TOCSectNum { display: none }
 **/
document.addEventListener("DOMContentLoaded", () => {
    // Find the TOC container element.
    // If there isn't one, create one at the start of the document.
    let toc = document.querySelector("#TOC");
    if (!toc) {
        toc = document.createElement("div");
        toc.id = "TOC";
        document.body.prepend(toc);
    }

    // Find all section heading elements. We're assuming here that the
    // document title uses <h1> and that sections within the document are
    // marked with <h2> through <h6>.
    let headings = document.querySelectorAll("h2,h3,h4,h5,h6");

    // Initialize an array that keeps track of section numbers.
    let sectionNumbers = [0,0,0,0,0];

    // Now loop through the section header elements we found.
    for(let heading of headings) {
        // Skip the heading if it is inside the TOC container.
        if (heading.parentNode === toc) {
            continue;
        }

        // Figure out what level heading it is.
        // Subtract 1 because <h2> is a level-1 heading.
        let level = parseInt(heading.tagName.charAt(1)) - 1;

        // Increment the section number for this heading level
        // and reset all lower heading level numbers to zero.
        sectionNumbers[level-1]++;
        for(let i = level; i < sectionNumbers.length; i++) {
            sectionNumbers[i] = 0;
        }

        // Now combine section numbers for all heading levels
        // to produce a section number like 2.3.1.
        let sectionNumber = sectionNumbers.slice(0, level).join(".");

        // Add the section number to the section header title.
        // We place the number in a <span> to make it styleable.
        let span = document.createElement("span");
        span.className = "TOCSectNum";
        span.textContent = sectionNumber;
        heading.prepend(span);

        // Wrap the heading in a named anchor so we can link to it.
        let anchor = document.createElement("a");
        let fragmentName = `TOC${sectionNumber}`;
        anchor.name = fragmentName;
        heading.before(anchor);    // Insert anchor before heading
        anchor.append(heading);    // and move heading inside anchor

        // Now create a link to this section.
        let link = document.createElement("a");
        link.href = `#${fragmentName}`;     // Link destination

        // Copy the heading text into the link. This is a safe use of
        // innerHTML because we are not inserting any untrusted strings.
        link.innerHTML = heading.innerHTML;

        // Place the link in a div that is styleable based on the level.
        let entry = document.createElement("div");
        entry.classList.add("TOCEntry", `TOCLevel${level}`);
        entry.append(link);

        // And add the div to the TOC container.
        toc.append(entry);
    }
});


// Assume that this "tooltip" element has class="hidden" in the HTML file.
// We can make it visible like this:
document.querySelector("#tooltip").classList.remove("hidden");

// And we can hide it again like this:
document.querySelector("#tooltip").classList.add("hidden");

function displayAt(tooltip, x, y) {
    tooltip.style.display = "block";
    tooltip.style.position = "absolute";
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

display: block; font-family: sans-serif; background-color: #ffffff;
e.style.display = "block";
e.style.fontFamily = "sans-serif";
e.style.backgroundColor = "#ffffff";

// Sometimes, you may find it easier to set or query the inline style of an element as a single string value rather than as a CSSStyleDeclaration object. To do that, you can use the Element getAttribute() and setAttribute() methods, or you can use the cssText property of the CSSStyleDeclaration object:

// Copy the inline styles of element e to element f:
f.setAttribute("style", e.getAttribute("style"));

// Or do it like this:
f.style.cssText = e.style.cssText;

window.location = "http://www.oreilly.com"; // Go buy some books!

// The History object has back() and forward() methods that behave like the browser’s Back and Forward buttons do:

// A third method, go(), takes an integer argument and can skip any number of pages forward (for positive arguments) or backward (for negative arguments) in the history list:
history.go(-2);   // Go back 2, like clicking the Back button twice
history.go(0);    // Another way to reload the current page

fetch("/api/users/current")            // Make an HTTP (or HTTPS) GET request
    .then(response => response.json()) // Parse its body as a JSON object
    .then(currentUser => {             // Then process that parsed object
        displayUserInfo(currentUser);
    });











































