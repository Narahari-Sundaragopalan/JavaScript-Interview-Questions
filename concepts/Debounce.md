## DEBOUNCE

Debouncing is a programming practice, which ensures time consuming tasks do not fire so often, that it affects the browser performance and the performance of the webpage. It limits the rate at which function gets invoked.

```js
// Sample debounce function

const debounce = (func, delay) => {
    let debounceTimer;

    return function() {
        const context = this;
        const arg = arguments;
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            func.apply(context, arg);
        }, delay);
    }
}

const button = document.getElementById('debouncedButton');

button.addEventListener('click', debounce(function() {
    console.log('I am a debounced button and no matter how many times I am clicked, I only get executed once every 3 seconds');
}, 3000));
```

The debounce function returns a function, which uses a debounceTimer to call the passed function after a delay.

If the debounce button is clicked once, the function is called after the delay. However, if the button is clicked again, before the delay has completed, the timer is reset to the specified delay and then called after the timeout. Thus every time the debounce function is called, the timer is reset and the call is delayed.