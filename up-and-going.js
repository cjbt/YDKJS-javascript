// Up and Going
// skipped chapter1: Intro to Programming
//
// ----------------------------------------------------------
// 	Chapter 2: Intro to Javascript
// ----------------------------------------------------------
//
// skipped past half the content until 'Strict Mode' section
//
//
//	--------------
//	Use Strict
//	--------------
//
// Can be used for an individual function or the entire file
//  "One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration form omitting the var..." What? english pls..
//
//
//	--------------------------------------------------
// 	IIFEs -> Immediately invoked Function Expressions
// 	--------------------------------------------------
let newFunc = (( () => 1 + 1 ))();

newFunc; // 2

// or 

(function IIFE() {
	console.log( "Hello!" );
})(); // Hello!

// IIFE executes the function without it being called
//
// 	-----------------------
//		Closure
//	-----------------------
//
// "closer is one of the most important, and often least understood, concepts in JavaScript"
// "...think of closure as a way to 'remember' and continue to access a function's scope (its variables) even once the function has finished running
// Private vs public... yet has to do with another scope topic
//
// 	-------------------------
// 	this identifier
//	-------------------------
//
// "if a function has a 'this' reference inside it, that 'this' reference usually points to an 'object'. But which 'object' it points to depends on how the function was called"
//
// 	-------------------------
// 	prototypes
//	-------------------------
//
// prototypes are like hiddren rooms an object has. If a method was called and it was not inside the block level of an object then it will search its prototype.
//
// 	---------------------------
// 	Old & New
// 	---------------------------
//
// bringing newer js to older browsers, there are two main techniques: Polyfilling transpiling 
//
// "'polyfill' is an invented term (by Remy Sharp) used to refer to taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior, but is able to run in older JS environments."
//
//"you cannot polyfill new syntax that has been added to the language. The new synta would throw an error in the old JS engine as unrecognized/invalis" -> solution is to "use a tool that converts your newer code into older code equivalents. " which is commonly called "transpoling" Transforming + compiling.
//
//a transpiler like babel looks at new code syntax and stranslates all that into old code
//
//	----------------------
//	non javascript
//	---------------------------
//
//
//
// core mechanisms of javascript are like:
// values, types, function closure, this, and prototype
//
// -----------------------------------------------------------------------
// 	Chapter 3
// -----------------------------------------------------------------------
//
// "...it's about taking seriously the task of learning all parts of JavaScript, not just some subset of the language that someone called 'the good parts' and not just the minimal amount you need to get your job done at work"
//
// one needs to put an effort to learn most of all of the language to become a great developer and js is not an exception to that rule
//
//	-------------------
//	scopes and closures
//	-------------------
//
// "...one of the most fundemental things you'll need to quickly come to terms with is how scoping of variables really works in JS"
//
// scoping is very important, the coping and closures chapter starts by "debunking common misconception of JS.." -> interpeted not compiled - nope. JS compiles.
// 
// We need a deeper understanding of  of the compiler's approach to our code. 
// need to learn all not just 'Hoisting'
// critical understanding of "lexical scope" 
//
// "Closure is pehaps the single most important concept in all of JS, buf if y ou haven't first grasped firmly how scope works, closure will likely remain beyond grasp".... !!!!
// -> module pattern, most prevalent code organization pattern in al of JavaScript. Private vs public? Needs deep understandng.
//
// 	--------------------------
// 	This & Object prototypes
// 	--------------------------
//
// behavior delegation vs class inheritence. one is what js was designed to do another is a fake class emulators
//
// delegation is an entirely different and more powerful design pattern, one that replaces theneed to design with class inheritence, but is very contraversial within the community
//
//
// types and grammar:
//
// conventional wisdom, coercion as "bad part"  of the js languange or a "flaw"
//
// coercion is incredibly useful and totally underestimated tool that you should be used in our code... when used properly, not only works, but makes your code better.
//
// async is not only critical in the perfomacne of application, but become the critical factor in writability and maintainability
//
// promises solves IoC -> time-independent wrapper around a "future value," which lets you reason about and compose them regardless of if the value is ready or not yet.
//
// generators solves lack of linear reason-ability -> introduces new mode of executions for js functions -> The pause-and-resume capability
