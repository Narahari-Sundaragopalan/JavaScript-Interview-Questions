## Search Autocomplete

> Implement an efficient Search Autocomplete input to search for movie titles, loading its data from a remote service endpoint. Note: For simplicity, use the provided searchData method to simulate a remote call.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search Autocomplete</title>
    <!-- Included some basic styling, change at will -->
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/prampcontent/3ea04cbd0f61a798e96afbe5d31ec2f9/raw/e879e32222b543b29a168daa089e2f9f28cf9eb2/autocomplete.css">
</head>
<body>
    <form class="search-form">
        <input type="text" class="search-input" placeholder="Start typing a movie title...">
        <ul class="results"></ul>
    </form>
    <script src="https://cdn.rawgit.com/prampcontent/180077452f9279073cab1035f60d30cf/raw/9cbf891a80bad9ad09c6261ef9578a65502922cc/search_helper.js"></script>
</body>
</html>
```

```js
// Naive Brute Force solution
// Attach event listeners on change and keyUp
const searchField = document.querySelector('.search-input');
const targetElement = document.querySelector('.results');

const showSearchResults = queryString => {
    const searchResults = [];

    searchData(queryString).then(results => {
        searchResults = results.map(movie => {
            return `<li
                        <span class="movie-title">${movie.title}</span>
                        <span class="movie-rating">${movie.rating}</span>
                    </li>`
        });
    });

    targetElement.innerHTML = searchResults.join('');
}

const handleSearchResults = () => {
    return showSearchResults(this.value);
}
searchField.addEventListener('change', handleSearchResults);
searchField.addEventListener('keyUp', handleSearchResults);
```

### Optimized Solution
```js
// Implementation with debounce and memoize(Caching of results)
// for better performance
const memoize = callback => {
    const cache = new Map();

    return function(...args) {
        const key = args[0];

        if (cache.has(key)) {
            return cache.get(key);
        }

        const response = callback.apply(this, args);
        cache.set(key, response);
        return response;
    }
}

const debounce = (callback, delay) => {
    let debounceTimer;

    return function(...args) {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    }
}

const searchField = document.querySelector('.search-input');
const targetElement = document.querySelector('.results');

function showSearchResults(queryStr) {
    const searchResults = [];
    const regexp = new Regexp(queryStr, 'gi');

    searchData(queryString).then(results => {
        searchResults = results.map(movie => {
            // highlight the queried string
            const title = movie.title.replace(regexp, `<span class="query-highlight">${queryStr}</span>`);
            return `<li>
                        <span class="movie-title">${title}</span>
                        <span class="movie-rating">${movie.rating}</span>
                    </li>`;
        });
        targetElement.innerHTML = searchResults.join('');
    });
}

showSearchResults = memoize(showSearchResults);
showSearchResults = debounce(showSearchResults, 3000);

const handleSearchResults = () => {
    return showSearchResults(this.value);
}

searchField.addEventListener('change', handleSearchResults);
searchField.addEventListener('keyUp', handleSearchResults);
```
