# Prototype Functions in JavaScript

## Constructor function

```js
function House(bedrooms, bathrooms, numSqFt) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqFt = numSqFt;
}

var house = new House(2,2,1000);
```

## Functions of the 'new' keyword

* It creates an empty object
* It then sets the keyword "this" to the newly created empty object
* It adds an implicit line "return this" to the end of the function which follows it
* It adds a property on the empty object called "__proto__" (commonly called as dunder proto)
* The dunder proto links the object that was created to the constructor function 

```js
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked");
  }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 2);

rusty.bark();
fido.bark();
```

## Multiple Constructors

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}
```

* In the above example, "this" keyword value here refers to the object created from the Motorcycle function
* Generally, when using call function, we call it with the object we want the value for "this" keyword to be.
* In the below example, the value of "this" keyword should be the keyword "this" inside the context of the Motorcycle function

```js
function Motorcycle(make, model, year) {
  Car.call(this, make, model, year);   
  this.numWheels = 2;
}


//Using apply function
function Motorcycle(make, model, year) {
  Car.apply(this, [make, model, year]);   
  this.numWheels = 2;
}
```

### Refactored with arguments in JS

* ```arguments``` returns a list of arguments passed to a function

```js
listArgument() {
  return arguments;
}

listArguments(1,2,3)
--- Output => [1, 2, 3]

function Motorcycle(make, model, year) {
  Car.call(this, arguments);
  this.numWheels = 2;
}
```

## Prototype Property

* Each Constructor function has a property called prototype which is an object

* The prototype object has a property called Constructor which points back to the constructor function

* The prototype property is the method by which JavaScript finds functions on objects and moves up the cycle till the Object.prototype (Which is the Root prototype for all objects in JS)

* Functions and properties can be added to prototype object which can be accessed by all the objects that are created by using the Constructor function

```js
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
var v1 = new Vehicle("Merc", "S-Class", 2012);
var v2 = new Vehicle("BMW", "Some Model", 2014);

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return "Beep";
  }
}
```

* The above 3 functions can be accessed by all the objects created with Constructor function Vehicle

This was a brief tutorial to understand the basics of Prototype function in JavaScript.