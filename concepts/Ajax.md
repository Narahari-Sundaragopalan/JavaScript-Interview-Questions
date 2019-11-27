## AJAX

```js
try {
    const data = await postData("https://www.example.com/answer", {answer : 42});
    console.log(JSON.stringify(data));
} catch (error) {
    console.error(error);
}
```

```js
async function postData(url = '', data = {}) {
    const response = await fetch(url , {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    });

    return await response.json();
}

// Eg. using XHR

function listenRequest() {
    console.log(this.responseText);
}
var request = new XMLHttpRequest();
request.addEventListener('load', listenRequest);
request.open("GET", "https://www.example.com/eg.txt");
request.send();
```


### Promisifying HTTP Request

```js
function get(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(response);
            } else {
                reject(Error(req.errorText));
            }
        };

        req.onError = function() {
            reject(Error('Network Error'));
        }

        req.send();
    });
}

get('dummyApiResponse.json').then(response => {
    console.log("Success ", JSON.parse(response));
}).catch(error => {
    console.log("Error ", error);
})
```
