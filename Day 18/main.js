"use strict";
// // Q 130:
Object.defineProperty(exports, "__esModule", { value: true });
// Explain how to export a function from one JavaScript file and import it into another file.
// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. 
//You can export functions, objects, or primitives from one file and import them into another.
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3));
