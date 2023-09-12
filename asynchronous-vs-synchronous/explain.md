# Asynchronous & Synchronous Differences
1. Return value (result & promise object)
2. Getting value (await & .then)

## Single-Threaded!
uses only one thread. Executes one thing at a time. JavaScript is single-threaded, so it executes the current line of code before moving to the next.   

## Non-Blocking!
means that JavaScript doesn't wait for the response of an API call, an Ajax request, an I/O event or a timer but moves on with the other block of code below it.

## Higher Order Functions
In synchronous programming, functions that require other functions as parameters are called Higher Order Functions.
[index.js > item 3](./index.js)

### Hints
- Most functions/methods that naturally run asynchronously require a callback function as a parameter.
