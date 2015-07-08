// demonstrating global vs local variables
/*var regular_joe = 'I am global!';

function prison() {
  var prisoner = 'I am local';
}

prison();
console.log(regular_joe);
console.log(prisoner);*/

// showing bad practices of not locally defining a variable, thus making it global
// which is of course, bad.
/*function prison() {
  prisoner_1 = "I have escaped!";
  var prisoner_2 = "I am still locked in!";
}

prison();
console.log(prisoner_1);
console.log(prisoner_2);*/

// wrong
/*function prison() {
  for (i = 0; i < 10; i++) {
    // content to loop through etc.
  }
}
prison();
console.log(i); // i is 10
delete window.i;*/

// permissable
/*function prison() {
  for (var i = 0; i < 10; i++) {
    // more stuff to go here
  }
}

prison();
console.log(i); // i is not defined*/

// best
/*function prison() {
  var i;
  for (i = 0; i < 10; i++) {
    // mo stuff
  }
}

prison();
console.log(i); // i is not defined.*/

/*function prison() {
  var prisoner = 'I am local!',
      warden = 'I am local too!',
      guards = 'I am local three';
}*/

/*function prison() {
  console.log(prisoner); // outputs prisoner is undefined
  var prisoner = "Now I am defined!";
  console.log(prisoner);
}

prisoner();*/

// first pass for variable hoisting
function myFunction(arg1, arg2) {
  var local_var = 'foo',
  a_function = function() {
    console.log('a function');
  };
  function inner() {
    console.log('inner');
  }
}
myFunction(1,2);
