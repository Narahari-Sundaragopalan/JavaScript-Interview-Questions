## Implement an EventEmitter

```js
const emitter = new EventEmitter();
const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
emitter.emit(eventName, a, b, c, d, ...);
sub.unsubscribe();
```

```js
class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        this.events.set(eventName, callback);

        return {
            unsubscribe : () => this.events.delete(eventName)
        };
    }

    emit(eventName, ...args) {
        if (this.events.has(eventName)) {
            this.events.get(eventName).apply(null, args);
        }
    }
}
```


```js
// Example:
function emitSuccess() {
    console.log("Emitter class implemented");
}
const emitter = new EventEmitter();
const sub = emitter.subscribe("change", emitSuccess);
emitter.emit("change", 1,2,3,4);
sub.unsubscribe();
```