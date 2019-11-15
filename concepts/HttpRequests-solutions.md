
### CHALLENGE 1

```js
console.log("I am at the beginning of the code");

setTimeout(function() { console.log("I am in the setTimeout callback function after 3 seconds(3000ms)");}, 3000)

console.log("I am at the end of the code");


// console.log('End of Challenge 1');
// */// (do not alter this line)
```

### CHALLENGE  2 

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

let myVar = setInterval(function() {
  console.log("Interval Hello!")
}, 2000);


setTimeout(function() {
  clearInterval(myVar);
}, 10000)

// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)
```


### CHALLENGE 3

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below
function everyXsecsForYsecs(callback, xSecs, ySecs) {
  let myVar = setInterval(callback, xSecs * 1000);
  
  setTimeout(function(){
    clearInterval(myVar);
  }, ySecs * 1000)
}

// part 2

function everyXSecsForYsecs(callback, xSecs, ySecs) {
  for (let i = 0; i < ySecs * 1000; i++) {
    setTimeout(callback, xSecs * 1000);
  }
}




console.log('End of Challenge 3');
// */// (do not alter this line)
```


### CHALLENGE 4

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below
function forEach(arr, cb) {
  for (let index = 0; index < arr.length; index++) {
    cb(arr[index], index);
  }
}
const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
  setTimeout(function() {
    console.log("Printing element " + i);
  }, delayTime);
}

forEach(delays, delayLog);


console.log('End of Challenge 4');
// */// (do not alter this line)
```


### CHALLENGE 5

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below
function changeColor() {
  if (document.body.style.background == "rgb(221, 238, 255)") {
    document.body.style.background = "rgb(255, 238, 221)";
  }
}

const activateButton = document.getElementById("activate");
activateButton.addEventListener("click", function() {
  console.log("clicked #1");
  
  const colorButton = document.getElementById("color");
  color.addEventListener("click", function() {
    console.log("clicked #2");
    
    changeColor();
  });
});



// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)
```


### CHALLENGE 6

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  
  setTimeout(function() {
    for (let i = 0; i < database.length; i++) {
      if (i === id) {
        callback(database[i]);
      }
    }
  }, 0)
}

function storeData(data) {
  dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log("Data is ", dataReceived);
// ...your code below



console.log('End of Challenge 6');
// */// (do not alter this line)
```


### CHALLENGE 7

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below

function showResponse() {
  
  if (this.response) {
    let responseObject = JSON.parse(this.response);
    const targetDiv = document.getElementById('ch2');
    targetDiv.innerHTML = responseObject.image_url;
  }
}

const request = new XMLHttpRequest();
const API = "https://rest.bandsintown.com/artists/coldplay?app_id=jshp";
request.addEventListener('load', showResponse);
request.open("GET", API);
request.send();



console.log('End of Challenge 7');
// */// (do not alter this line)
```


### CHALLENGE 8

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below
function showEvents() {
  if (this.response) {
    let responseObject = JSON.parse(this.response);
    let events = responseObject.map(object => object.venue.city);
    
    const targetDiv = document.getElementById('ch3');
    events.forEach(event => {
      const li = document.createElement("li");
      const textNode = document.createTextNode(event);
      li.appendChild(textNode);
      targetDiv.appendChild(li);
    });
  }
}

const requestEvents = new XMLHttpRequest();
const eventsAPI = "https://rest.bandsintown.com/artists/maroon5/events?app_id=jshp";

requestEvents.addEventListener("load", showEvents);
requestEvents.open("GET", eventsAPI);
requestEvents.send();




console.log('End of Challenge 8');
// */// (do not alter this line)
```


### CHALLENGE 9

```js
// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below
function showEventsInUSA() {
  
  const responseEventsInUsa = JSON.parse(this.response);
  const events = responseEventsInUsa.filter(event => event.venue.country === "United States")
                  .map(evt => evt.venue.city);
  console.log(events);
  
  const targetDiv = document.getElementById('ch4');
  events.forEach(event => {
    const p = document.createElement('p');
    const pTextNode = document.createTextNode(event);
    p.appendChild(pTextNode);
    targetDiv.appendChild(p);
  });
  
}

const eventsAPIUSA = "https://rest.bandsintown.com/artists/maroon5/events?app_id=jshp";
const requestEventsInUsa = new XMLHttpRequest();
requestEventsInUsa.addEventListener('load', showEventsInUSA);
requestEventsInUsa.open("GET", eventsAPIUSA);
requestEventsInUsa.send();


console.log('End of Challenge 9');
// */// (do not alter this line)
```

