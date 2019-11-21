# Keyword **"this"**

> Introduction and basic tutorial for the keyword "this". There are 4 rules using which we can determine the value of keyword "this". These cover most of the contexts, in which the keyword "this" will be used.

## Global Context

When "this" keyword is not inside of a declared object, it always refers to the Global Context

```js

console.log(this);  // Refers to Global Object

function whatIsThis() {
  return this;    // Refers to Global Object
}

function variablesInThis() {
  // Bad practice, Eliminated by "use strict" in ES5
  this.person = "hari";  // Refers to window object and property is attached to it
}

console.log(person);

whatIsThis();
```


## Implicit Rule

When the keyword "this" is inside of a declared object, the value of keyword "this" will be equal to the closest parent object

```js
var person = {
  firstName: "hari",
  sayHi: function() {
    return "Hi " + this.firstName;   // person.sayHi will evaluate to Hi hari
  },
  determineContext: function() {
    return this === person;  // Evaluates to "true", as "this" keyword is equal to person (closest parent object)
  }
}
```

### Nested objects example

```js
var person = {
  firstName: "Hari",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;  // Evaluates to Hello undefined as "this" keyword is undefined here, the closest parent object dog does not have a firstName attribute
    },
    determineContext: function() {
      return this === person;   // Evaluates to false, as "this" keyword is not equal to person but equals to person.dog
    }
  }
}
```


## Call, Apply and Bind

> Explicitly set "this" keyword value. Can only be used on functions. Also known as Explicit binding.


### Call method

1. First argument to call function is what we want the value of the keyword this to be, called "thisArg"

2. Remaining arguments to call function can be any number of variables we want

3. call function is invoked immediately

```js

var person = {
  firstName: "Hari",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName; 
    },
    determineContext: function() {
      return this === person; 
    }
  }
}

// Using Call function to attach "this" keyword to person
person.dog.sayHello.call(person) // Hello Hari

person.dog.determineContext.call(person); // Evaluates to true


var hari = {
  firstName: "hari",
  sayHi: function() {
    return "Hi " + this.firstName;
  }
}

var sheen = {
  firstName: "Shivani"
}

hari.sayHi() // Evaluates to Hi hari

hari.sayHi.call(sheen);  // Evaluates to Hi Shivani
```

### Apply method

1. First argument to apply function is what we want the value of the keyword this to be, called "thisArg"

2. Second argument to apply function is an array of variables we want to pass

3. apply function is invoked immediately

```js
var hari = {
  firstName: "hari",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var sheen = {
  firstName: "Shivani"
}
hari.sayHi();
hari.sayHi.apply(sheen);

hari.addNumbers(1,2,3,4);
//Using call
hari.addNumbers.call(sheen, 1,2,3,4);
// Using Apply
hari.addNumbers.apply(sheen, [1,2,3,4]);
```


### Bind method

> Same as Call function. Only difference is that it is not invoked immediately

1. It returns a function definition - useful for invoking functions at a later point in time. Eg: setTimeout()

2. Does not call the function immediately, invoked later when all arguments are passed to it

```js
var hari = {
  firstName: "hari",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var sheen = {
  firstName: "Shivani"
}

var sheenCalc = hari.addNumbers.bind(sheen, 4,5,6,7);
sheenCalc();

var sheenCalcLater = hari.addNumbers.bind(sheen, 4,5);
sheenCalcLater(6,7);
```

## With setTimeOut function

```js
var hari = {
  firstName: "Hari",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName); // "this" keyword here becomes attached to window Object as setTimeout is called at a later point of time
    }, 1000)
  }
}
```

> To fix this issue, bind method can be used to bind the correct "this" keyword

* This ensures that when the bind happens, the "this" keyword which still points to the declared object, binds it to the sayHi function, hence when called, it outputs the proper result

```js
var hari = {
  firstName: "Hari",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName);
    }.bind(this), 1000)
  }
}
```

## The **'new'** Keyword

1. When the "new" keyword is used, a new object is created

2. The new keyword is used with a function, and inside this function's definition, the keyword "this" points to the newly created object.

3. An implicit return "this" is added to the function which uses it

```js
function Person(firstName, lastName) {
  this.firstName = firstName;  // "this" keyword refers to the newly created object
  this.lastName = lastName;
}

var newPerson = new Person("Narahari", "Sundaragopalan");
```

* **The keyword "this" is a reserved keyword in JavaScript and its value is determined at execution**

* **"this" keyword can be set using global context, object binding, explicit binding(call, apply & bind) or the 'new' keyword**
