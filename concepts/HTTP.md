### HTTP Requests

HTTP requests contains of 3 main parts

1. Start Line 
* Noun or verb describing the request : `GET`, `PUT`, `POST`, `HEAD`, `OPTIONS`

* URL part requesting the server for information or updating the server with new information called request target

Below are origin forms 
```
POST / HTTP 1.1
GET /background.png HTTP 1.1
HEAD /test.html?query=testString HTTP 1.1
```
Below are absolute forms used for proxy connections
```
GET http://developer.mozilla.org/en-US/docs/Web HTTP 1.1
```

Authority Form - for tunnel connections
Asterisk form - used for representing the server as a whole.

2. Headers
3. Body (usually in case of POST requests containing form data)

```
POST / HTTP 1.1
Host: Localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; ) 
Accept: text/html, application/xhtml+xml,...,*/*; q=0.8
Accept-language: en-US, en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade Insecure-Requests: 1
Content-type: multipart/form-data; boundary=123456789
Content-length: 345 
```
