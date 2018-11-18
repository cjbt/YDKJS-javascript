// Up and Going
// skipped chapter1: Intro to Programming
// Chapter 2: Intro to Javascript
//
// skipped past half the content until 'Strict Mode' section
//
//
//---------------------------------------------------------
//		Use Strict
//--------------------------------------------------------
// Use strict deals with scope. "...tightens the rules for certain behaviors."
// keeps code safer... adhering to strict mode makes code more optimizable by the engine. Should use in all programs.
// Can be used for an individual function or the entire file
// -> "One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration form omitting the var..." What? english pls..
//
//
//--------------------------------------------------------
// IIFEs -> Immediately invoked Function Expressions
// -------------------------------------------------------
let newFunc = (( () => 1 + 1 ))();

newFunc; // 2

// or 

(function IIFE() {
	console.log( "Hello!" );
})(); // Hello!

// IIFE executes the function without it being called
//
// -----------------------------------------------------------
//		Closure
//------------------------------------------------------------
//
// "closer is one of the most important, and often least understood, concepts in JavaScript"
// "...think of closure as a way to 'remember' and continue to access a function's scope (its variables) even once the function has finished running
// Private vs public... yet has to do with another scope topic
//
// --------------------------
// 	this identifier
// ------------------------
//
// "if a function has a 'this' reference inside it, that 'this' reference usually points to an 'object'. But which 'object' it points to depends on how the function was called"
//
// ------------------------------
// 	prototypes
// ----------------------------
//
// prototypes are like hiddren rooms an object has. If a method was called and it was not inside the block level of an object then it will search its prototype.
//
// --------------------------------
// 	Old & New
// ------------------------------
//
// bringing newer js to older browsers, there are two main techniques: Polyfilling transpiling 
//
// "'polyfill' is an invented term (by Remy Sharp) used to refer to taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior, but is able to run in older JS environments."
//
//"you cannot polyfill new syntax that has been added to the language. The new synta would throw an error in the old JS engine as unrecognized/invalis" -> solution is to "use a tool that converts your newer code into older code equivalents. " which is commonly called "transpoling" Transforming + compiling.
//
//a transpiler like babel looks at new code syntax and stranslates all that into old code
//
//----------------------
//	non javascript
//---------------------------
//
//
//
//code mechanisms of javascript like
// values, types, function closure, this, and prototypes
