## Object Oriented Programming in JavaScript

#### WORKING WITH OBJECT LITERALS


1. Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson.

> This function will: create an empty object add a name property to the newly created object with its value being the 'name' argument passed into the function add an age property to the newly created object with its value being the 'age' argument passed into the function return the object

```js
function makePerson(name, age) {
	// add code here
  const user = {};
  user.name = name;
  user.age = age;
  
  return user;

}

var vicky = makePerson('Vicky', 24);

console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
```

#### USING OBJECT.CREATE

2. Inside personStore object, create a property greet where the value is a function that logs "hello".

```js
var personStore = {
    greet: () => {
        console.log('hello');
    }
}

personStore.greet(); // -> Logs 'hello'
```

3. Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

```js
function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;

    return person;
}

var sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'
```

4. Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

```js
personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
}
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
```

#### USING THE 'NEW' KEYWORD

5. Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

```js
function PersonConstructor() {
    this.greet = () => {
        console.log('hello')
    }
}
```

6. Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

```js
function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;

    return person;
}
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'
```

7. Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

```js
PersonConstructor.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
}
mike.introduce(); // -> Logs 'Hi, my name is Mike'
```

#### USING ES6 CLASSES

8. Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.

```js
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet = () => {
        console.log('hello');
    }
}
```


9. Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method,DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.

```js
class DeveloperClass extends PersonClass {
    constructor(name) {
        super(name);
    }
    introduce = () => {
        console.log(`Hello World, my name is ${this.name}`);
    }
}
var hari = new DeveloperClass('Hari', 32);
console.log(hari.name); // -> Logs 'Hari'
hari.introduce(); //-> Logs 'Hello World, my name is Hari'
```

#### EXTENSION: SUBCLASSING

10. Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.

* Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.

* Then make sure the value of the 'type' field for 
adminFactory objects is 'Admin' instead of 'User'.

* Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.

* Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.

```js
var userFunctionStore = {
    sayType: function() {
        console.log(`I am a ${this.type}`);
    }
}

const userFactory = (name, score) => {
    const user = Object.create(userFunctionStore);
    user.type = 'User';
    user.name = name;
    user.score = score;

    return user;
}

const adminFunctionStore = Object.assign({}, userFunctionStore);

const adminFactory = (name, score) => {
    const admin = Object.create(adminFunctionStore);
    admin.type = 'Admin';
}

adminFunctionStore.sharePublicMessage = function() {
    console.log('Welcome users!');
}
```