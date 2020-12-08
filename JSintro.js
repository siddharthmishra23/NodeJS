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


    


    

































