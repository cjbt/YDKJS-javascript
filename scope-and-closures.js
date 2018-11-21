// chapter 1: scope
// -------------------------------------
//
// What is scope?
// The ability to store values to a variable  and pull from values from them  is what gives a program its state.
// Where do variables store its values? Where do those variables live, where are they stored and how does a program find them when it needs them?
//
// scope = a well defined set of rules for storing variables in some location, and for finding those variables at a later time.
//
// Compiler theory:
//
// JavaScript may fall under the general category of a 'dynamic' or 'intepreted' languange, it's a fact that js is a compiled language. != compiled well in advanced as traditional compiled languages || the results of 'compilation portable among various distributed systems." idk what that is
//
// traditional compiled process compared to javascript
//
// 1. Tokenizing/Lexing: breaks a string of characters to meaningful chunks called tokens.
var a = 2;
// var, a, =, 2, and ;. whitespace may or may not play a part as tokens depending on its meaningfulness
//
// 2. Parsing: taking an array of tokens and turning them to "AST" (Abstract Syntax Tree), a tree of nested elements that collectively represent the grammatical structure of the program.
//
// tree for var a = 2;:
// Top level node: VariableDecleration = 'var, or let or const'
// Child node: Identifier = 'a'
// Another Child node: AssignmentExpressions is the equals token
// More Child node: NumericLiteral = '2'
//
// 3. Code-generation: it's a process that takes an AST and turns them to executable code. Process depends of the language.
//
// taking AST for var a = 2; and turning it to a set of machine instructions that actually create a variable called a (reserving memory, etc_, and store a value ot a.
//
// that is the traditional, but JavaSCript is more complex. more steps for optimizing performance at certain steps.
//
// unlike many other languages, js doesn't have the 'luxury' of having plenty of time to optimize due to Javascript compilation doesn't happen in a build step ahead of time...? what? **
//
// js compilation happens, in many cases, microseconds < before the code is executed. 
//
// all of that means js is fast. while some lang compilers compile in a build step ahead of time, js does it right before execution.
//
// --------------------------------------
// 	summary?
// --------------------------------------
//
// Compiler theory:
// 1. tokenization/lexing - breaks given argument or string into meaningful chunks or tokens (whispaces are dependent on context if its meaningful or not: ie in string types)
// 2. Parsing - takes the array of tokens and put it in an AST (abstract syntax tree). This tree consists of a parent-child nest that brings grammatical structure to the program
// 3. code-generation - Turns that AST into executable code. Turns it into machine instructions for example, to reserve memory to create a variable.. etc.
//
// Understanding scope.
// Who is having the conversation?
//
// The cast:
// 1. Engine: in charge of complilation and execution of a js program from start to finish
// 2. Compiler: one of Engine's friends; does all the under the hood parsing.
// 3. Scope: "another friend of Engine; collects and maintains a look-up-list of all declared identifiers" and then enforces a strict set of rules as to how these are accessible to currently executing code.. 
//
// engine is the chief, compiler is the work monkey, the scope is the project manager.
//
// Back and forth:
// when you see 'var a = 2;, it's not just one statement. In the eyes of the engine, it's two. Compiler's viewpoint: how it will handle during compilation, and one which the engine will handle during execution...? what's the difference?
//
//
// engine is always asking scope RHS, and LHS. top down
//
// quiz

function foo (a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

// 1. Identif all the LHS look-ups (there are 3!)
// a, b, c
//
// 2. Identify all the RHS look-ups (there are 4!)
// foo, a + b, foo( 2 ) <- last answer is wrong. it should be '= a'
//
// nested scope:
//
// starts from block level and goes one level up outside of the block to ask scope for a RHS reference of something that was declared outside of the block.
//



// Chapter 2: Lexical scope
// ---------------------------------------------
// tldr: scope is defined by author-time decisions of where funcitons are delcared. there are twi ways to cheat lexical scope: 'eval(..) and with'. do not use.
//
// Two type of models of how scope works: 1. Lexical scope. 2. Dynamic Scope
//
// Lex Time:
// tokenizing breaks down a string or argument into tokens: var a = 2; var, a, =, 2; space is depending on context.
//
// chapter 1. tokenization or lexing -> the first traditional phase of a standard language compiler. 
// 
// circular definition: Lexical scope is a scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer proces your code.
//
function foo(a) {
	let b = a * 2;
	function bar(c) {
		console.log(a, b, c);
	}
	bar(b * 3);
}

foo(2); //2 4 12
// there's three nested scopes in this code.
// first is the global scope, second is the scope that is found in foo, third is the scope found in bar.
//
//Look ups:
//
// scope bubbles help engine find an identifier
//
// engine executs consoe.log(..) -> looks for the three referenced variables a, b, c. It first starts with the innermost scope bubble. engine will find the nearest where a variable is defined. 
//
// "scope look-ups stops once it finds the first match."
// " No matter where a function is invoked from, or even how it is invoked, its lexical scope is only defined by where the function was declared.
//
// Cheating Lexical:
//
// While lexical scope is scope as the program is being written. The present time. You can cheat this time and is very discouraged. Basically going back into the author-time state (when the program was being written) and changing its values. The author leaving an opening in a function (parameter) that manipulates code that was written during author-time.
//
// two ways: 
//
// eval:
// takes a string as an argument, treats the contents of the string as if it had actually been authored code at that point of the program... you can programmatically generate code inside your authored code, and run the generated code as if it had been there at autho time... like it was there all along. 
// ...after evel(..) has executed, the Engine will not 'know' or 'care' that the previous code in question was dynamically interpreted and thus modified the lexical scope environment. 
//
function foo(str, a) {
	eval(str); // cheating
	console.log(a,b);  // a str
}
let b = 2;
foo("let b = 3;", 1); // 1 3
// you can put code that the engine will ignore at the time but will be assumed it was there all along. "eval(..) is usually used to eecute dynamically created code
//
// eval when used in a sctrict-mode program operates in its own lexical scope,... declarations made inside of the eva()..." will not work.
//
function foo(str) {
	"use strict";
	eval (str);
	console.log(a); // ReferenceError: a is not defined
}

foo("let a = 2");
// other similar facilities to eval(..): setTimeout(..) and setInterval(..) can take a string for their respective first argument, the contents of which are 'eval'uated as the code of adynamically-generated function. This is old, legacy behavior... don't do it.
//
// 'new Function(..) -> takes a string of code in its last argument and turns it into dynamically-generated function... 
//
// use case for dynamically generating code is rare. not worth it.
//
// with:
//
// shoft-hand of making multiple property references against an object wthout repeating the object reference itself each time.
//
let obj = {
	a: 1,
	b: 2,
	c: 3
};

// more "tedious to repeat "obj"

obj.a = 2;
obj.b = 3;
obj.c = 4;

// 'easier' short-hand
with (obj){
	a = 3;
	b = 4;
	c = 5;
}

// a lot more things happening than just convenience short hand
// above example takes top and middle together to create on 'convenient solution'

// the problem with 'with' is if used in a function and an object you want to modify does not have one of its elements, then a LHS instruction is called and looks for where it was defined then turns it into a global variable. confusing right? just don't use it.
//
// with "strict mode" it outright bans 'with' and limits the bad things of 'eval'
//
// performance-wise, wont' matter if you don't use it lol. It takes less effort

// block scope:
//
// A code inside a funciton is hidden from the global scope. You can also hide already made code by wrapping a function around it.. why? 'Principle of Least Privelage" or least authority or least exposure
// In the diesing of the software, such as the API for a module/object, you should expose only what's minimally necessary and "hide" everything else.
//
function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}
	let b;
	b = a + doSomethingElse( a * 2 );

	console.log(b*3);
}
doSomething(2); // 15

// above example is a cleaner design and hides private details inside the scope of doSomething() so that b and doSomethingElse 'are not accessible to any outside influence'
//
// Collision Avoidance
// -> to avoid unintended collision between two different identifiers with the same name but different intended usages.
//
( function(arr){
	//do something
	return arr;
})();

// foo is bound in the enclosing scope, and we call it directly with foo. 
// second snipper, foo is not bound in the enclosing scope, but instead is bound only inside of its own function.
//
// "'(function foo(){..})(); as an expression means the identifier 'foo' is found only in the scope where the .. indicates, not in the outer scope. Hiding the name 'foo' inside itself means it does not pollute the enclosing scope unnecessarily
// 
// anonymous vs named functions
// best practice is to always name your function expressions.
setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
	console.log("I waited 1 second" );
}, 1000 );
// is this also aplicable in higher order functions like map?
//
//
// IFEI: Invoking Function Expressions Immediately
// ( function(){ .. } )();
// first (  ) makes the function into an expression, instead of a decleration and the second () executes the function.
// usually used on anonymous functions
((()=>`this seems cool`))(); // this seems cool
// naming an IIFE has all the aforementioned benefit over anonymous functions so it's good practice to name. But it's not that cool. as above.
//
// declerations made with let will not hoist
//
// let attaches to the block scope it was declared so it's good.
//
