// Sample ajax request

try {
    const data = await postData("https://www.example.com/answer", {answer : 42});
    console.log(JSON.stringify(data));
} catch (error) {
    console.error(error);
}

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