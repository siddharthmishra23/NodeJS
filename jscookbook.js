// Javascript cookbook :
// helpful content

TO Check if it is string:

if (typeof unknownVariable === 'string' ||
    String.prototype.isPrototypeOf(unknownVariable)) {
  // It's a string primitive or a string wrapped in an object.
}
********************
TO Comapare two strings:
An alternate, bulletproof approach is to use the String.localeCompare() method with sensitivity set to accent, as shown here:
const a = "hello";
const b = "HELLO";

if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0) {
  // We end up here, because the case-insensitive strings match.
}
Discussion :
If localeCompare() deems that two strings match, it returns 0. Otherwise it returns a positive or negative integer indicating whether the compared string falls before or after the referenced string in the sort order. (Because we’re using localeCompare() to test for equality, the sort order isn’t important, and you can ignore it.)

The second parameter of localeCompare() holds a string that specifies the locale (as explained in “Converting a Numeric Value to a Formatted String”). If you pass undefined, then localeCompare() uses the locale of the current computer, which is almost always what you want.

To perform a case-insensitive comparison, you need to set the sensitivity property. There are two values that can work. If you set sensitivity to accent, characters that have different accents (like a and á) are treated as unequal. But if you set sensitivity to base, you’ll get a more permissive case-insensitive comparison that treats all accented letters as matches.
****************

Checking If a String Contains a Specific Substring

const searchString = 'infinitely';
const fullText = 'I know not where I was born, save that the castle was' +
 ' infinitely old and infinitely horrible.';

if (fullText.includes(searchString, 70)) {
  // Still true, because the search skips the first 'infinitely' and
  // hits the second one.
}


  
  
  
