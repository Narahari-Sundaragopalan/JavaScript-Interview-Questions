## EVENT DELEGATION

```html
<ul id="posts">
    <li id = "post-1">Item 1</li>
    <li id = "post-2">Item 2</li>
    <li id = "post-3">Item 3</li>
    <li id = "post-4">Item 4</li>
</ul>
```

```js
document.getElementById("posts").addEventListener(function(e) {
    if (e.target && e.target.nodeName === 'LI') {
        console.log("List item " + e.target.id.replace("post-", "") + " was clicked");
    }
})
```


```html
<div id="parentDiv">
    <a class="classA">Link 1</a>
    <a class="classB">Link 1</a>
    <a class="classC">Link 1</a>
    <a class="classD">Link 1</a>
    <a class="classE">Link 1</a>
</div>
```

```js
document.getElementById("parentDiv").addEventListener(event => {
    if (event.target && event.target.matches("a.classA")) {
        console.log("Anchor tag with class A was clicked");
    }
})
```