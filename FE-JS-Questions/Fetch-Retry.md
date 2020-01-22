## JavaScript Fetch Retry (On failure)

> There are many cases, where network failure happens randomly. This affects the consistency of the results, especially in API calls. So, below is an implementation of `fetch-retry` function which retries `fetch` upon failure upto `n` times.

> Fetch (or axios library) works great for most AJAX requests in JavaScript. However, network fails happen randomly. To catch this issue, we will implement a function `fetch_retry(url, options, n)`, which does `fetch(url, options)` but retries it upto n times upon failure. This increases the chances of success and displaying consistent results.

### Approach 1: Loop over n times and call fetch
```js
function fetch_retry(url, options, n) {
	for (let i = 0; i < n; i++) {
		fetch(url, options);
		if (success)  return result;
	}
}
```
> Above approach will NOT work. Since FETCH is an asynchronous function, the program will not wait for the results before continuing. `n` fetches will be called at the same time, regardless of whether the previous calls succeed.

> `fetch` returns a Promise. So if when call succeeds, the function inside the `.then` will be called. And if the call fails, error will be caught in the `catch` block.

### fetch_retry outline
```js
function fetch_retry(url, options, n) {
	fetch(url, options)
		.then(function(result) {
			// on success
		}).catch(function(error) {
			// on failure
		});
}
```

> We will use a promise to make fetch_retry work synchronously. So `fetch_retry` will return a Promise, that resolves if any attempt out of n attempts succeed, and rejects if all `n` attempts succeed.
```js
function fetch_retry(url, options, n) {
	return new Promise(function(resolve, reject) {
		fetch(url, options)
			.then(function(result) {
				// on success
			}).catch(function(error) {
				// on failure
			})
	});
}
```

> If fetch succeeds, we can resolve the Promise returned by calling the resolve function.
```js
function fetch_retry(url, options, n) {
	return new Promise(function(resolve, reject) {
		fetch(url, options)
			.then(function(result) {
				// on success
				resolve(result);  // Call resolve to resolve the returning promise
			}).catch(function(error) {
				// on failure
			})
	});
}
```

> If fetch fails, we call the fetch_retry function recursively, and reduce the the value of `n`
```js
function fetch_retry(url, options, n) {
	return new Promise(function(resolve, reject) {
		fetch(url, options)
			.then(function(result) {
				// on success
				resolve(result);
			}).catch(function(error) {
				// on failure
				fetch_retry(url, options, n - 1) // Call fetch_retry recursively
					.then(/* one of the remaining n - 1 calls to fetch will succeed */)
					.catch(/* remaining n - 1 fetch failed */)
			})
	});
}
```

> `fetch_retry` will return a Promise and resolve if any of the `n-1` attempts succeed and rejects if all the `n-1` attempts fail.

> If `fetch_retry` in the on failure case, succeeds, Promise will resolve, and reject if all the calls fail.
```js
function fetch_retry(url, options, n) {
	return new Promise(function(resolve, reject) {
		fetch(url, options)
			.then(function(result) {
				// on success
				resolve(result);
			}).catch(function(error) {
				// on failure
				fetch_retry(url, options, n - 1)
					.then(resolve) // Resolve
					.catch(reject); // Reject
			})
	});
}
```

> Since we have recursion involved, we need a base case to exit the function when all the fetch calls have failed `n` times. So if `n === 1` and fetch call fails, we reject with error from fetch, without calling fetch_retry any further
```js
function fetch_retry(url, options, n) {
	return new Promise(function(resolve, reject) {
		fetch(url, options)
			.then(function(result) {
				// on success
				resolve(result);
			}).catch(function(error) {
				if (n === 1) return reject(error);
				fetch_retry(url, options, n - 1)
					.then(resolve)
					.catch(reject);
			})
	});
}
```

> Since fetch itself returns a Promise, the `return Promise` part is redundant. Also we do not need to explicitly call resolve and reject on failure after `fetch_retry` is called in the catch section. So by cleaning up, we have below:
```js
function fetch_retry(url, options, n) {
	return fetch(url, options)
		.catch(function(error) {
			if (n === 1) throw error;
			return fetch_retry(url, options, n - 1);
		});
}
```

> Converting above to use arrow functions
```js
const fetch_retry = (url, options, n) => fetch(url, options).catch(error => {
	if (n === 1) throw error;
	return fetch_retry(url, options, n - 1);
});
```

> Using ES7 async await
```js
const fetch_retry = async (url, options, n) => {
	try {
		return await fetch(url, options);
	} catch(error) {
		if (n === 1)  throw error;
		return await fetch_retry(url, options, n - 1);
	}
};
```

> async await without recursion
```js
const fetch_retry = async(url, options, n) => {
	let error;

	for (let i = 0; i < n; i++) {
		try {
			return await fetch(url, options);
		} catch(err) {
			error = err;
		}
	}

	throw error;
}
```

> Google Phone Interview question: Call an API, which is unstable in returning a response, and fails occassionally. So take the average of 3 successfull responses and return that as a result. However, if the entire process is not complete within 10 seconds, show an error message to the user.
```js
// Need to revisit
const fetch_retry = async(url, options, n) => {
	let error;
	let result = [];
	let i = 0;

	while (true) {
		try {
			if (i === n) {
				return result.reduce((acc, currentValue) => acc + currentValue, 0);
			}
			response = await fetch(url, options);
			result.push(response);
			i++;
		} catch(err) {
			error = err;
		}
	}

	throw error;
}
let response = fetch_retry(url, options, 3);

setTimeout(function() {
	if (!response) {
		console.log("There was an error with the API");
	} else {
		console.log("Result is: ", response);
	}
}, 10000)
```