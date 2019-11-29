## Implement getElementsByClassName

```js
function getElementsByClassName(className) {
    const classList = [];

    function getNodes(node) {
        if (node.classList && node.classList.contains(className)) {
            classList.push(node);
        }

        for (let i = 0; i < node.childNodes.length; i++) {
            getNodes(node.childNodes[i]);
        }
    }

    getNodes(document.body); // Access the DOM's document.body
    return classList;
}
```
